"use client";

import { useTranslation } from "react-i18next";
import DistrictMap from "../components/district-map";
import Navbar from "../components/navbar";
import DestinationContent from "./destination-content";
import Hero from "./hero";
import Footer from "../components/footer";

export default function Page() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <DestinationContent />
      <DistrictMap />
      <Footer />
    </div>
  );
}
