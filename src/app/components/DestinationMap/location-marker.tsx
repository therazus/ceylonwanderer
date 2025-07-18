import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface LocationMarkerProps {
  name: string;
  x: number;
  y: number;
  isVisible: boolean;
  style?: React.CSSProperties;
}

export function LocationMarker({ name, x, y, isVisible, style }: LocationMarkerProps) {
  const searchOnGoogle = (locationName: string) => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      locationName
    )}`;
    window.open(googleSearchUrl, "_blank");
  };

  return (
    <motion.div
      style={style}
      className={cn(
        "absolute transition-all duration-300 z-10",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <div className="relative">
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2">
          <button
            onClick={() => searchOnGoogle(name)}
            className="bg-white px-2 py-1 rounded-md shadow-md text-sm text-primary whitespace-nowrap"
          >
            {name}
          </button>
        </div>
        {/* Marker dot */}
        <div className="w-3 h-3 bg-orange-500 rounded-full shadow-md" />
      </div>
    </motion.div>
  );
}
