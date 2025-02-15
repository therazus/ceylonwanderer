"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

interface CarouselProps {
  images?: string[];
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  opts?: {
    align: string;
    loop: boolean;
  };
}

export function Carousel({
  images,
  children,
  className = "",
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || !images) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, autoPlay, interval]);

  const goToSlide = (index: number) => {
    if (!images) return;
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {images &&
        images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentIndex ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

      {images && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              )}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex", className)} {...props} />
));
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-white/90 transition-colors",
      className
    )}
    {...props}
  />
));
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-white/90 transition-colors",
      className
    )}
    {...props}
  />
));
CarouselNext.displayName = "CarouselNext";
