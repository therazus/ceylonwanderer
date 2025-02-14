"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react"; // Added import for React

interface CarouselProps {
  images: string[];
  children: React.ReactNode;
}

export function Carousel({ images, children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={() =>
            goToSlide((currentIndex - 1 + images.length) % images.length)
          }
          className="rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => goToSlide((currentIndex + 1) % images.length)}
          className="rounded-full bg-black/50 p-2 text-white hover:bg-black/75"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">{children}</div>
      </div>
    </div>
  );
}
