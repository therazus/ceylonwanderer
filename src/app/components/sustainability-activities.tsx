"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Leaf, GraduationCap, Heart, ArrowRight } from "lucide-react";
import education from "../../../public/education.jpg";
import plant from "../../../public/plant.jpg";
import animal from "../../../public/rescue.jpg";
import sustainableimage from "../../../public/sustainable.png";

const SustainabilityActivities = () => {
  const { t } = useTranslation();

  return (
    <section
      id="sustainability-section"
      className="bg-gradient-to-b from-primary to-tan_primary text-white py-20"
    >
      {/* Philosophy Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
              {/* Image */}
              <Image
                src={sustainableimage.src}
                alt="Sustainability Philosophy"
                width={800} // Set appropriate values
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-7xl italic font-medium text-muted_primary tracking-wide">
              {t("sustainability.title1")}
            </h2>

            {/* make following uppercrease */}
            <h3 className="text-4xl font-bold  mb-4 uppercase">
              {t("sustainability.title2")}
            </h3>
            <p className="text-gray-200 mb-8">
              {t("sustainability.description")}
            </p>
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-tan_primary transition-all">
              {t("sustainability.read-more")}
            </button>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education Activity */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="w-full h-64 relative">
              <Image
                src={education.src}
                alt="Education"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {" "}
                  {t("sustainability.education.title")}{" "}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  {t("sustainability.education.description")}
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plant a Tree Activity */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="w-full h-64 relative">
              <Image
                src={plant.src}
                alt="Plant a Tree"
                fill
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <Leaf className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {t("sustainability.plant.title")}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  {t("sustainability.plant.description")}
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rescue Animal Activity */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="w-full h-64 relative">
              <Image
                src={animal.src}
                alt="Rescue Animal"
                fill
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  {t("sustainability.animal.title")}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  {t("sustainability.animal.description")}
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-primary">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityActivities;
