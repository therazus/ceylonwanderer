import AboutUs from "./components/about-us";
import { SriLankaMap } from "./components/DestinationMap/sri-lanka-map";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SustainabilityActivities from "./components/sustainability-activities";
import { Testimonials } from "./components/testimonials";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <SriLankaMap />
      <SustainabilityActivities />
      <Testimonials />
      <Footer />
    </main>
  );
}
