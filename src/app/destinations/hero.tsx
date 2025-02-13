"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../../public/sllandscape.jpg";

export default function Hero() {
  const { t } = useTranslation();
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
          backgroundImage: `url(${heroImage.src})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 pt-20 text-center text-white">
        <h1 className="text-6xl font-semibold tracking-wider sm:text-2xl lg:text-8xl uppercase">
          Sri Lanka
        </h1>
        <h1 className="-mt-6 text-6xl sm:text-2xl lg:text-8xl  font-caveat text-muted_primary leading-none">
          The Island of Endless Diversity
        </h1>
        <p className="text-lg font-light tracking-wide sm:text-xl md:text-2xl"></p>
      </div>
    </div>
  );
}
