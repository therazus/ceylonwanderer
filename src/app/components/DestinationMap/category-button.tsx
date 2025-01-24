"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../lib/utils";

interface CategoryButtonProps {
  name: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryButton({
  name,
  image,
  isActive,
  onClick,
}: CategoryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "relative w-full p-2 rounded-xl overflow-hidden transition-all duration-300",
        "flex items-center gap-3 text-left",
        "bg-white border-2 shadow-lg",
        isActive
          ? "border-primary bg-primary/10"
          : "border-slate-200 hover:border-primary"
      )}
    >
      <div className="relative w-14 h-14 rounded-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <span
        className={cn(
          "font-semibold text-lg",
          isActive ? "text-tan_primary" : "text-muted"
        )}
      >
        {name}
      </span>
    </motion.button>
  );
}
