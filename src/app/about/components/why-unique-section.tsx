"use client";

import { useTranslation } from "react-i18next";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";

export function WhyUniqueSection() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      {/* Section 1: Bridge Between Two Worlds */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="lg:text-left">
      
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-muted_primary bg-clip-text text-transparent mb-6">
                    {t("about.unique.title")}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t("about.unique.subtitle")}
          </p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.unique.bridge.title")}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t("about.unique.bridge.description")}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-80 lg:h-96"
          >
            <Image
              src="/about/bridge-cultures.jpg"
              alt="Travel gear and binoculars"
              fill
              className="object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Authentic and Personalized Experiences */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src="/about/purpose-driven.jpg"
              alt="Authentic experiences"
              fill
              className="object-cover object-bottom hover:scale-105 transition-transform duration-1000"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="w-full max-w-2xl px-8 md:px-16 text-white text-right">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {t("about.unique.authentic.title")}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-xl ml-auto">
                    {t("about.unique.authentic.description")}
                  </p>
                  
                  {/* Green Decorative Elements */}
                  <div className="flex justify-end items-center space-x-3 pt-4">
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                    <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                    <div className="w-6 h-1 bg-muted_primary rounded-full"></div>
                  </div>
                  
                  {/* Additional Green Accent */}
                  <div className="flex justify-end">
                    <div className="w-20 h-20 border-2 border-primary/30 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary rounded-full opacity-80"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Additional Decorative Elements */}
            <div className="absolute top-8 right-8 w-24 h-24 border-2 border-white/20 rounded-full"></div>
            <div className="absolute bottom-8 right-16 w-16 h-16 border-2 border-primary/30 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Local Expertise, International Standards */}

      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Description and Topic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center md:text-left"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.unique.expertise.title")}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.unique.expertise.description")}
              </p>
            </motion.div>
        {/* Right: Statistics Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 ">
            {[
          { value: t("about.statistics.continents"), label: t("about.statistics.continents_label") },
          { value: t("about.statistics.countries"), label: t("about.statistics.countries_label") },
          { value: t("about.statistics.oceans"), label: t("about.statistics.oceans_label") },
          { value: t("about.statistics.cities"), label: t("about.statistics.cities_label") }
            ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center group p-6 bg-primary/5  hover:shadow-lg transition-all duration-300"
          >
            <div className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
            ))}
          </div>
          
          {/* Horizontal dividing line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-px"></div>
          
          {/* Vertical dividing line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-px"></div>
        </div>
          </div>
        </div>
      </section>
      

      {/* Section 4: Photo Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
          >
        <h2 className="text-3xl font-bold bg-primary bg-clip-text text-transparent mb-4">
          {t("about.gallery.title")}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("about.gallery.description")}
        </p>
          </motion.div>
          {(() => {
        const imageGrid = [
          [
            { src: "/heroimage.webp", alt: "Sri Lankan landscape", height: "h-48" },
            { src: "/education.jpg", alt: "Cultural experience", height: "h-32" },
          ],
          [
            { src: "/plant.jpg", alt: "Nature conservation", height: "h-32" },
            { src: "/sllandscape.jpg", alt: "Mountain landscape", height: "h-48" },
          ],
          [
            { src: "/districts/colombo.jpg", alt: "Sri Lankan coast", height: "h-48" },
            { src: "/rescue.jpg", alt: "Wildlife rescue", height: "h-32" },
          ],
          [
            { src: "/galle/galle3.jpg", alt: "Galle district", height: "h-32" },
            { src: "/galle/galle2.jpg", alt: "Galle experience", height: "h-48" },
          ],
        ];
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {imageGrid.map((col, colIdx) => (
          <div className="space-y-2" key={colIdx}>
            {col.map((img, rowIdx) => (
              <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * (colIdx * 2 + rowIdx) }}
            className={`relative ${img.height}`}
              >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg hover:scale-110 transition-transform duration-500"
            />
              </motion.div>
            ))}
          </div>
            ))}
          </div>
        );
          })()}
        </div>
      </section>

      {/* Section 5: Driven by Purpose & Tailored for German Traveler */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("about.services.title")}
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <Target className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.unique.purpose.title")}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.unique.purpose.description")}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center items-center mb-6">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.unique.german.title")}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t("about.unique.german.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Exclusive Offer */}
      <section className="relative py-20 px-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/sllandscape.jpg"
            alt="Sri Lankan sunset landscape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
        </div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full mb-6 backdrop-blur-sm">
            <Award className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider">
              {t("about.exclusive_offer.title")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("about.exclusive_offer.subtitle")}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t("about.exclusive_offer.description")}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg transition-all duration-300 group">
              {t("about.exclusive_offer.button")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
