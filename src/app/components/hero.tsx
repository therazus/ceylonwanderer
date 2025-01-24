"use client";

import { useEffect, useState } from "react";
import herimage from "../../../public/heroimage.webp";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${herimage.src})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 pt-20 text-center text-white">
        <h1 className="mb-0 text-4xl font-bold tracking-wider sm:text-3xl md:text-3xl leading-tight">
          Discover the Untamed Beauty of
        </h1>
        <h1 className="-mt-6 text-8xl font-caveat text-muted_primary leading-none">
          Sri Lanka
        </h1>

        <p className="text-lg font-light italic tracking-wide sm:text-xl md:text-2xl">
          Where every moment becomes an unforgettable memory.
        </p>
      </div>
    </div>
  );
}
