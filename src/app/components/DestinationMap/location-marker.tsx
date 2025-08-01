import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LocationMarkerProps {
  name: string;
  isVisible: boolean;
  style?: React.CSSProperties;
}

export function LocationMarker({ name, isVisible, style }: LocationMarkerProps) {
  const [isTapped, setIsTapped] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'top' | 'bottom'>('top');

  const searchOnGoogle = (locationName: string) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      locationName
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  const handleTap = () => {
    setIsTapped(!isTapped);
  };

  // Check tooltip position based on marker position
  const checkTooltipPosition = () => {
    if (style?.top && typeof style.top === 'string') {
      const topValue = parseInt(style.top);
      if (topValue < 100) { // If marker is within 100px of top
        setTooltipPosition('bottom');
      } else {
        setTooltipPosition('top');
      }
    }
  };

  // Set tooltip position on mount
  useEffect(() => {
    checkTooltipPosition();
  }, [style]);

  const getTooltipClasses = () => {
    if (tooltipPosition === 'bottom') {
      return "absolute top-full left-1/2 -translate-x-1/2 z-50";
    }
    return "absolute bottom-full left-1/2 -translate-x-1/2 z-50";
  };

  return (
    <motion.div
      style={style}
      className={cn(
        "absolute transition-all duration-300 z-10",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
      onClick={handleTap}
    >
      <div className="relative">
        {/* Marker dot */}
        <div className="w-3 h-3 bg-orange-500 rounded-full shadow-md border-2 border-white cursor-pointer hover:scale-110 transition-transform" />
        
        {/* Always visible label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: tooltipPosition === 'top' ? 10 : -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className={getTooltipClasses()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              searchOnGoogle(name);
            }}
            className="bg-white px-2 py-1 rounded-md shadow-md text-xs text-primary whitespace-nowrap border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {name}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
