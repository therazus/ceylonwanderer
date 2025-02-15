"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface Testimonial {
  content: string;
  author: string;
  location: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Rasula Gimhan",
    location: "New York, New York",
    rating: 5,
    image: "/customers/rasula.jpg",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Mark Stone",
    location: "Munich, Germany",
    rating: 5,
    image: "/customers/mark.jpg",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Rasula Koralege",
    location: "Colombo, Sri Lanka",
    rating: 5,
    image: "/customers/rasula.jpg",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    location: "Los Angeles, California",
    rating: 5,
    image: "/customers/mark.jpg",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 2 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-caveat italic text-[#4A7B24] mb-2">
            Inspirational Stories
          </h2>
          <h3 className="text-base font-bold tracking-wider uppercase text-gray-800">
            FROM OUR PARTICIPANTS
          </h3>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] px-4"
                >
                  <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg relative mb-8">
                    <div className="flex text-[#4A7B24] mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mb-6 text-gray-600">
                      {testimonial.content}
                    </blockquote>
                    <div className="mt-4 flex items-center justify-between">
                      {/* Left Side: Author & Location */}
                      <div className="flex flex-col">
                        <cite className="not-italic font-semibold text-gray-800 uppercase text-sm">
                          {testimonial.author}
                        </cite>
                        <span className="text-sm text-gray-500">
                          {testimonial.location}
                        </span>
                      </div>

                      {/* Right Side: Image */}
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
