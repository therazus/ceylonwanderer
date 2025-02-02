"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { categories } from "../../data/categories";
import { CategoryButton } from "./category-button";
import { LocationMarker } from "./location-marker";
import slmap from "../../../../public/Sri-lankan-map.png";

export function SriLankaMap() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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
                Explore the Magical
                <span className="block text-tan_primary">Destinations</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed">
                Discover the wonders of Sri Lanka with our curated list of top
                destinations. From pristine beaches to ancient temples, embark
                on an unforgettable journey through this tropical paradise.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 text-base sm:text-lg font-medium px-4 sm:px-6 py-2 sm:py-3 bg-primary text-gray-100 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore Now
              </motion.button>
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
              <Image
                src={slmap || "/placeholder.svg"}
                alt="Sri Lanka Map"
                fill
                className="object-contain p-4"
                priority
              />
              <AnimatePresence>
                {categories.map((category) =>
                  category.locations.map((location) => (
                    <LocationMarker
                      key={location.id}
                      name={location.name}
                      x={location.coordinates.x}
                      y={location.coordinates.y}
                      isVisible={activeCategory === category.id}
                    />
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
