import { motion } from "framer-motion";
import { TreePalm, Mountain, Utensils, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";





export default function DestinationContent() {
  const { t } = useTranslation();

  const features = [
  {
    icon: TreePalm,
    title: t("destination-page.content.features.beaches.title"),
    description: t("destination-page.content.features.beaches.description"),
  },
  {
    icon: Mountain,
    title: t("destination-page.content.features.landscapes.title"),
    description: t("destination-page.content.features.landscapes.description"),
  },
  {
    icon: Utensils,
    title: t("destination-page.content.features.culinary.title"),
    description: t("destination-page.content.features.culinary.description"),
  },
  {
    icon: Leaf,
    title: t("destination-page.content.features.wellness.title"),
    description: t("destination-page.content.features.wellness.description"),
  },
];

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          {t("destination-page.content.main_title")}
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
            {t("destination-page.content.description")}
          </p>
          <p className="text-lg font-semibold text-primary">
            {/* fix lint issues */}
            {t("destination-page.content.closing_text")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
