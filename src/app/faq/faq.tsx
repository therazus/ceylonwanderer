"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are the accommodation options kid-friendly?",
    answer:
      "Yes they are – our properties also feature dedicated family suites that come with separate rooms for maids.",
  },
  {
    question: "Do the properties offer excursions?",
    answer:
      "Yes, we offer a variety of excursions including guided tours, nature walks, cultural experiences, and adventure activities. Our concierge can help plan the perfect excursion for your interests.",
  },
  {
    question: "How much does it cost to stay at any of the Araliya Hotels?",
    answer:
      "Our rates vary by season, room type, and package selection. We offer competitive prices starting from $150 per night, with special packages and promotions available throughout the year.",
  },
  {
    question: "What Kinds of food items are served at these properties?",
    answer:
      "We serve a diverse range of cuisines including local specialties, international dishes, and fusion cuisine. Our restaurants offer breakfast, lunch, and dinner with both buffet and à la carte options.",
  },
  {
    question:
      "What type of amenities and facilities are available at the hotels?",
    answer:
      "Our hotels feature swimming pools, spa facilities, fitness centers, restaurants, bars, conference rooms, and business centers. We also provide Wi-Fi, room service, and concierge services.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="py-20 sm:py-20 lg:py-24 relative bg-gradient-to-b from-bg_green to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section with Image */}
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto mb-12">
              <Image
                src="/faq.png"
                alt="FAQ Illustration"
                width={600}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl italic font-medium text-primary mb-2 tracking-wide">
              Frequently Asked Questions
            </h2>
            <h3 className="text-base font-bold tracking-wider uppercase text-base">
              About Ceylon Wanderer
            </h3>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-muted_primary"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left transition-colors hover:bg-bg_green/50"
                >
                  <span className="text-lg font-medium text-base">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-primary transition-transform duration-200">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-secondary">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-secondary">
              Still have questions?{" "}
              <a
                href="/contact"
                className="text-primary hover:text-tan_primary font-medium transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
