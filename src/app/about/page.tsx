"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AboutUsHero } from "./components/about-us-hero";
import { WhyUniqueSection } from "./components/why-unique-section";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <AboutUsHero />
      <WhyUniqueSection />
      <Footer />
    </main>
  );
}
