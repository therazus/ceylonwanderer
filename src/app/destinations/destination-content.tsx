import { motion } from "framer-motion";
import { TreePalm, Mountain, Utensils, Leaf } from "lucide-react";

const features = [
  {
    icon: TreePalm,
    title: "Sun-Soaked Beaches",
    description:
      "Experience pristine coastlines and golden sands perfect for relaxation and water sports.",
  },
  {
    icon: Mountain,
    title: "Diverse Landscapes",
    description:
      "Explore lush rainforests, stunning mountain ranges, and serene lakes all in one island.",
  },
  {
    icon: Utensils,
    title: "Culinary Journey",
    description:
      "Embark on a gastronomic adventure with Sri Lanka's rich and diverse cuisine.",
  },
  {
    icon: Leaf,
    title: "Wellness & Ayurveda",
    description:
      "Rejuvenate your body and mind with traditional Ayurvedic treatments and yoga retreats.",
  },
];

export default function DestinationContent() {
  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          Discover the Magic of Sri Lanka
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-base mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            Sri Lanka offers a perfect blend of diverse experiences, all in one
            captivating island. Whether you're an explorer or a thrill-seeker,
            Sri Lanka caters to every interest with its lush landscapes and
            endless adventures.
          </p>
          <p className="text-lg font-semibold text-primary">
            Experience the perfect weather and Sri Lanka's year-round warmth and
            sunshine!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
