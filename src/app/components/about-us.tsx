"use client";

import { Button } from "../components/ui/button";
import { Plane, Globe, Heart, Map, Compass, Mountain } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Right Column */}
          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Our story, since 2012
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Luxury travel reimagined. Emotionally engaging luxury experiential
              itineraries in Sri Lanka tailor made with meticulous attention to
              detail by an owner-managed, women-led, full service boutique
              travel company based in Sri Lanka. To us, it's all about
              connections - to explore the legacy of a centuries old culture, to
              the incredible endemism, wildlife and biodiversity on private
              safaris and guided walks, to rural people and their traditions in
              one of the world's most fascinating islands famously known as
              Ceylon. Enjoy luxury in the best accommodation spiced by our
              adventures with local authenticity that supports community and
              conservation. Curious about our story and our own network of
              storytellers? We'd love to hear from you.
            </p>
            <p className="text-lg font-semibold text-gray-800 italic">
              - Chamintha Jayasinghe, Co-Founder
            </p>
          </div>

          {/* Vertical Line (Shown on large screens) */}
          <div className="hidden lg:block w-px bg-gray-300 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>

          {/* Left Column */}
          <div className="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">IMPACT</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayu in the Wild is a Travel Partner of The Long Run. Between 1%-3%
              of revenue from our tailor made holidays support our positive
              impact initiatives annually, including our Classroom in the Wild
              spoken English initiative - ongoing since 2014, the halo effect of
              our experiential trips from the North to the South, and our latest
              efforts in 2024 to help hearing impaired kids integrate into
              mainstream schools and universities.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-4 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 text-lg rounded-xl">
            Learn More
          </Button>
        </div>

        {/* Travel Icons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { icon: Plane, label: "Travel" },
            { icon: Globe, label: "Explore" },
            { icon: Heart, label: "Experience" },
            { icon: Map, label: "Adventure" },
            { icon: Compass, label: "Discover" },
            { icon: Mountain, label: "Nature" },
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
