import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { District } from "../types/district";
import type React from "react";

interface DestinationPopupProps {
  district: District | null;
  onExplore: (name: string) => void;
  style?: React.CSSProperties;
}

export function DestinationPopup({ district, style }: DestinationPopupProps) {
  const { t } = useTranslation();
  
  if (!district) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-10 w-96"
      style={style}
    >
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="relative h-40">
          <Image
            src={district.image || "/placeholder.svg"}
            alt={district.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-4xl font-bold text-white tracking-wide">
            {district.name}
          </h3>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-base mb-4">
            {t(`districts.${district.descriptionKey}`)}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 mt-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
            <p>Click on the district to explore more about {district.name}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
