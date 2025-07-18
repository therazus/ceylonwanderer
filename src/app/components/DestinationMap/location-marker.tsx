import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LocationMarkerProps {
  name: string;
  x: number;
  y: number;
  isVisible: boolean;
  style?: React.CSSProperties;
}

export function LocationMarker({ name, x, y, isVisible, style }: LocationMarkerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const searchOnGoogle = (locationName: string) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      locationName
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  const showLabel = isHovered || isTapped;

  return (
    <motion.div
      style={style}
      className={cn(
        "absolute transition-all duration-300 z-10",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTap}
    >
      <div className="relative">
        {/* Marker dot */}
        <div className="w-3 h-3 bg-red-500 rounded-full shadow-md border-2 border-white cursor-pointer hover:scale-110 transition-transform" />
        
        {/* Tooltip/Label */}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  searchOnGoogle(name);
                }}
                className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm text-primary whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
