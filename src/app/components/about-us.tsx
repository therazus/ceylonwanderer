"use client";
import { useTranslation } from "react-i18next";

import { Button } from "../components/ui/button";
import { Plane, Globe, Heart, Map, Compass, Mountain } from "lucide-react";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about-us" className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("about.impact")}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("about.impact_description")}
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg rounded-xl">
            {t("about.learn_more")}
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { icon: Plane, label: t("about.icons.travel") },
            { icon: Globe, label: t("about.icons.explore") },
            { icon: Heart, label: t("about.icons.experience") },
            { icon: Map, label: t("about.icons.adventure") },
            { icon: Compass, label: t("about.icons.discover") },
            { icon: Mountain, label: t("about.icons.nature") },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
