"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Heart, Globe, Users, Shield, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface UniqueFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

export function WhyUniqueSection() {
  const { t } = useTranslation();
  const router = useRouter();

  const handlePlanJourney = () => {
    router.push("/#sri-lanka-map");
  };

  const features: UniqueFeature[] = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: t("about.unique.bridge.title"),
      description: t("about.unique.bridge.description"),
      image: "/about/bridge-cultures.jpg"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: t("about.unique.authentic.title"),
      description: t("about.unique.authentic.description"),
      image: "/about/authentic-experience.jpg"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: t("about.unique.expertise.title"),
      description: t("about.unique.expertise.description"),
      image: "/about/local-expertise.jpg"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: t("about.unique.purpose.title"),
      description: t("about.unique.purpose.description"),
      image: "/about/purpose-driven.jpg"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t("about.unique.german.title"),
      description: t("about.unique.german.description"),
      image: "/about/german-traveler.jpg"
    }
  ];

  return (
    <section className="relative pt-16 lg:pt-24 bg-white z-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t("about.unique.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("about.unique.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Text Content */}
              <div className="flex-1">

                <h3 className="text-3xl md:text-4xl italic font-semibold text-primary leading-tight tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="flex-1 relative max-w-sm mx-auto">
                <div className="relative">
                  {/* Background geometric shape */}
                  <div className={`absolute inset-0 w-full h-full bg-gradient-to-br ${index % 2 === 0 ? 'from-primary/20 to-tan_primary/20' : 'from-tan_primary/20 to-primary/20'} rounded-[2.5rem] transform rotate-6`}></div>
                  
                  {/* Image container with 1:1 aspect ratio */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-[2.5rem] transform -rotate-3 shadow-2xl">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                  </div>

                  {/* Decorative swirl */}
                  <div className={`absolute ${index % 2 === 0 ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} w-24 h-16 text-primary opacity-30`}>
                    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M10 30c10-20 30-20 40 0s30 20 40 0" strokeLinecap="round"/>
                      <path d="M15 40c10-15 25-15 35 0s25 15 35 0" strokeLinecap="round" opacity="0.6"/>
                    </svg>
                  </div>

                  {/* Small decorative star */}
                  <div className={`absolute ${index % 2 === 0 ? '-top-4 -left-4' : '-top-4 -right-4'} w-8 h-8 text-tan_primary`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="w-full mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-primary/10 to-white py-16 lg:py-24"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-tan_primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6"
              >
                {t("about.cta.title")}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed"
              >
                {t("about.cta.description")}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlanJourney}
                className="inline-flex items-center px-12 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300"
              >
                {t("about.cta.primary")}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
