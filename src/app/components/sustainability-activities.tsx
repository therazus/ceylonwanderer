import React from "react";
import { Leaf, GraduationCap, Heart, ArrowRight } from "lucide-react";
import education from "../../../public/education.jpg";
import plant from "../../../public/plant.jpg";
import animal from "../../../public/rescue.jpg";
import sustainableimage from "../../../public/sustainable.png";

const SustainabilityActivities = () => {
  return (
    <section className="bg-gradient-to-b from-primary to-tan_primary text-white py-20">
      {/* Philosophy Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
              {/* Image */}
              <img
                src={sustainableimage.src}
                alt="Sustainability Philosophy"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-7xl font-serif italic  font-caveat text-muted_primary">
              Philosophy
            </h2>
            <h3 className="text-4xl font-bold mb-4">OF SUSTAINABILITY</h3>
            <p className="text-gray-200 mb-8">
              Join us on our effort to create positive impact in volunteer and
              eco-tourism across Sri Lanka. Together we can make a difference
              and create new possibilities for all races.
            </p>
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-tan_primary transition-all">
              READ MORE
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
              <img
                src={education.src}
                alt="Education"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <GraduationCap className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  Empowering communities through knowledge and learning
                  opportunities
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-green-600">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Plant a Tree Activity */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="w-full h-64 relative">
              <img
                src={plant.src}
                alt="Plant a Tree"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <Leaf className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Plant a Tree</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  Contributing to reforestation and environmental conservation
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-green-600">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rescue Animal Activity */}
          <div className="group relative overflow-hidden rounded-lg">
            <div className="w-full h-64 relative">
              <img
                src={animal.src}
                alt="Rescue Animal"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all flex items-center justify-center">
              <div className="text-center p-6">
                <Heart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Rescue Animal</h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity mb-4">
                  Protecting and caring for wildlife in need
                </p>
                <div className="flex justify-center">
                  <button className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-green-600">
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
