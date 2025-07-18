"use client";

import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCategories } from "../../data/categories";
import { CategoryButton } from "./category-button";
import { LocationMarker } from "./location-marker";
import slmap from "../../../../public/Sri-lankan-map.png";

export function SriLankaMap() {
  const { t } = useTranslation();
  const categories = useCategories();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mapDimensions, setMapDimensions] = useState({
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
  });

  // Calculate actual map dimensions and position
  const calculateMapDimensions = () => {
    if (!mapContainerRef.current || !imageRef.current) return;

    const container = mapContainerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Get the natural dimensions of the image using native browser Image
    const img = new window.Image();
    img.onload = () => {
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      
      // Account for padding (p-4 = 16px on each side)
      const paddingOffset = 32; // 16px * 2 (left + right, top + bottom)
      const availableWidth = containerWidth - paddingOffset;
      const availableHeight = containerHeight - paddingOffset;
      
      const imageAspectRatio = img.width / img.height;
      const containerAspectRatio = availableWidth / availableHeight;

      let actualWidth, actualHeight, offsetX, offsetY;

      if (imageAspectRatio > containerAspectRatio) {
        // Image is wider than container ratio - fit to width
        actualWidth = availableWidth;
        actualHeight = availableWidth / imageAspectRatio;
        offsetX = 16; // padding offset
        offsetY = 16 + (availableHeight - actualHeight) / 2;
      } else {
        // Image is taller than container ratio - fit to height
        actualHeight = availableHeight;
        actualWidth = availableHeight * imageAspectRatio;
        offsetX = 16 + (availableWidth - actualWidth) / 2;
        offsetY = 16; // padding offset
      }

      setMapDimensions({
        width: actualWidth,
        height: actualHeight,
        offsetX,
        offsetY,
      });
    };
    img.src = slmap.src;
  };

  useEffect(() => {
    calculateMapDimensions();

    const handleResize = () => {
      calculateMapDimensions();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Convert percentage coordinates to actual pixel positions with offset for overlapping markers
  const getActualPosition = (x: number, y: number, locationId: string, categoryId: string) => {
    if (mapDimensions.width === 0 || mapDimensions.height === 0) {
      return { x: 0, y: 0 };
    }

    const baseX = mapDimensions.offsetX + (x / 100) * mapDimensions.width;
    const baseY = mapDimensions.offsetY + (y / 100) * mapDimensions.height;

    // Check for overlapping markers and apply offset
    let offsetX = 0;
    let offsetY = 0;
    let overlapCount = 0;

    // Find all other markers with the same or very close coordinates
    categories.forEach((category) => {
      category.locations.forEach((location) => {
        // Skip the current location
        if (location.id === locationId && category.id === categoryId) return;
        
        // Check if coordinates are the same or very close (within 1% tolerance)
        const isSameX = Math.abs(location.coordinates.x - x) < 1;
        const isSameY = Math.abs(location.coordinates.y - y) < 1;
        
        if (isSameX && isSameY) {
          overlapCount++;
        }
      });
    });

    // Apply offset if there are overlapping markers
    if (overlapCount > 0) {
      // Create a unique offset based on the location and category ID
      const uniqueId = `${categoryId}-${locationId}`;
      const hash = uniqueId.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      
      // Use hash to determine offset direction and distance
      const angle = (Math.abs(hash) % 360) * (Math.PI / 180);
      const distance = 8; // 8px offset
      
      offsetX = Math.cos(angle) * distance;
      offsetY = Math.sin(angle) * distance;
    }

    return {
      x: baseX + offsetX,
      y: baseY + offsetY,
    };
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-primary/10 bg-white">
      <div className="w-full px-4 py-8 sm:px-6 lg:px-8 xl:px-20 lg:py-12 xl:py-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:w-4/12 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-left space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-muted">
                {t("destination.title1")}
                <span className="block text-tan_primary">
                  {t("destination.title2")}
                </span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed">
                {t("destination.description")}
              </p>
              <Link href="/destinations">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 bg-primary text-gray-100 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {t("destination.explore-now")}
                </motion.button>
              </Link>
            </motion.div>

            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 sm:gap-4">
              <AnimatePresence>
                {categories.slice(0, 6).map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CategoryButton
                      name={category.name}
                      image={category.image}
                      isActive={activeCategory === category.id}
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === category.id ? null : category.id
                        )
                      }
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-8/12 relative mt-8 lg:mt-0">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[800px] rounded-2xl overflow-hidden">
              <div
                ref={mapContainerRef}
                className="relative w-full h-full"
              >
              <Image
                ref={imageRef}
                src={slmap || "/placeholder.svg"}
                alt="Sri Lanka Map"
                fill
                className="object-contain p-4"
                priority
                onLoad={calculateMapDimensions}
              />
              <AnimatePresence>
                {categories.map((category) =>
                  category.locations.map((location) => {
                    const position = getActualPosition(
                      location.coordinates.x,
                      location.coordinates.y,
                      location.id,
                      category.id
                    );
                    return (
                      <LocationMarker
                        key={`${category.id}-${location.id}`}
                        name={location.name}
                        isVisible={activeCategory === category.id}
                        style={{
                          position: "absolute",
                          left: `${position.x}px`,
                          top: `${position.y}px`,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    );
                  })
                )}
              </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
