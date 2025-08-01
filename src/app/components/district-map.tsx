"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { districts } from "../data/districts";
import { DestinationPopup } from "./destination-popup";
import { useTranslation } from "react-i18next";

export default function DistrictMap() {
  const router = useRouter();
  const { t } = useTranslation();

  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleDistrictClick = (name: string) => {
    const slug = name.toLowerCase().replace(/\s/g, "-");
    router.push(`/destinations/${slug}`);
  };

  const handleMouseMove = (
    event: React.MouseEvent<SVGPathElement, MouseEvent>,
    districtId: string
  ) => {
    if (hoveredDistrict !== districtId) {
      // const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - 350; // Add offset to not be too close to cursor
      const y = event.clientY - 150; // Position above cursor
      setPopupPosition({ x, y });
      setHoveredDistrict(districtId);
    }
  };

  return (
    <section className="min-h-screen relative bg-white overflow-hidden flex items-center">
      {/* Devil mask decorations */}
      <div className=" inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30vw] h-auto">
          <Image
            src="/devil_right.png"
            alt="Left decoration"
            width={500}
            height={500}
            className="w-full h-auto  opacity-20"
          />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30vw] h-auto">
          <Image
            src="/devil_right.png"
            alt="Right decoration"
            width={500}
            height={500}
            className="w-full h-auto  transform -scale-x-100 opacity-20"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">
            {t("destination-page.district_map.title")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("destination-page.district_map.subtitle")}
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-2xl">
            <svg viewBox="0 0 335 600" className="w-full h-auto">
              {districts.map((district) => (
                <motion.g
                  key={district.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <defs>
                    <pattern
                      id={`image-${district.id}`}
                      patternUnits="objectBoundingBox"
                      height="1"
                      width="1"
                    >
                      <image
                        href={district.image}
                        height={district.height}
                        width={district.width}
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </pattern>
                  </defs>
                  <path
                    id={district.id}
                    d={district.path}
                    fill={
                      hoveredDistrict === district.id
                        ? "#028A0F"
                        : `url(#image-${district.id})`
                    }
                    stroke={
                      hoveredDistrict === district.id ? "#028A0F" : "#fff"
                    }
                    strokeWidth={1}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={(e) => handleMouseMove(e, district.id)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    onClick={() => handleDistrictClick(district.name)}
                  />
                </motion.g>
              ))}
            </svg>

            <AnimatePresence>
              {hoveredDistrict && (
                <DestinationPopup
                  district={
                    districts.find((d) => d.id === hoveredDistrict) || null
                  }
                  onExplore={handleDistrictClick}
                  style={{
                    left: `${popupPosition.x}px`,
                    top: `${popupPosition.y}px`,
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
