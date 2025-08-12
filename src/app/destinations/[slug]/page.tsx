"use client";

import { useParams } from "next/navigation";
import { Plane, Bed } from "lucide-react";
import { destinations } from "../../data/destinations";
import { Carousel } from "../../components/ui/carousel";
import { ThingsToDoCard } from "../../components/things-to-do-card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function DestinationPage() {
  const { slug } = useParams();
  const destination = destinations.find((dest) => dest.slug === slug);

  if (!destination) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-error">Destination not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[64px]">
        {/* Hero Carousel Section */}
        <Carousel images={destination.images} className="h-[calc(110vh-64px)]">
          <div className="absolute bottom-12 left-8 md:bottom-24 md:left-16 text-white max-w-lg">
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight">
              {destination.name}
            </h1>
            <p className="mb-6 text-base sm:text-lg lg:text-xl text-white/90">
              {destination.description}
            </p>
          </div>
          <div className="absolute bottom-12 right-8 md:bottom-24 md:right-16 flex flex-col gap-4">
            <div className="flex items-center gap-4 bg-black/60 p-4 rounded-lg backdrop-blur-sm">
              <Plane className="h-8 w-8 text-muted_primary" />
              <div>
                <p className="text-sm  text-muted_primary">
                  Flights To {destination.name}
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  ${destination.flightCost}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-black/60 p-4 rounded-lg backdrop-blur-sm">
              <Bed className="h-8 w-8 text-muted_primary" />
              <div>
                <p className="text-sm  text-muted_primary">Vacations Plan</p>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  ${destination.vacationCost.amount}/
                  {destination.vacationCost.duration}
                </p>
              </div>
            </div>
          </div>
        </Carousel>

        {/* Tour Plan Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl italic font-medium text-primary mb-4 tracking-wide">
                Journey
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-base mb-6">
                Through Time
              </h3>
              <p className="text-secondary text-base sm:text-lg lg:text-xl">
                Follow our expertly crafted itinerary designed to showcase the
                best of {destination.name}. Each day brings new adventures and
                discoveries.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {destination.tourPlan.map((plan) => (
                <div
                  key={plan.key}
                  className="rounded-lg border border-muted_primary bg-white p-6 sm:p-8 lg:p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="mb-3 text-xl sm:text-2xl lg:text-3xl font-bold text-base">
                    {plan.title}
                  </h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed">
                    {plan.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Things To Do Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-bg_green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl italic font-medium text-primary mb-4 tracking-wide">
                Discover
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-base mb-6">
                Extraordinary Experiences
              </h3>
              <p className="text-secondary text-base sm:text-lg lg:text-xl">
                Immerse yourself in the rich cultural heritage and natural
                wonders of {destination.name}. Each experience has been
                carefully curated to create unforgettable memories.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {destination.thingsToDo.map((item, index) => (
                <ThingsToDoCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
