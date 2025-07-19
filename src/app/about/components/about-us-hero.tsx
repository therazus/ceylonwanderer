"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../../../../public/about-us.jpg";

export function AboutUsHero() {
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage.src})`,
          transform: `translateY(${offset * 0.5}px)`,
          height: '120%',
          top: '-10%'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 pt-20 text-center text-white z-10">
        <h1 className="text-4xl font-semibold tracking-wider sm:text-2xl lg:text-6xl uppercase">
          {t("about.hero.title")}
        </h1>
        <h1 className="-mt-6 text-4xl sm:text-2xl lg:text-6xl  font-caveat text-muted_primary leading-none">
          {t("about.hero.subtitle")}
        </h1>
      </div>
    </div>
  );
}
