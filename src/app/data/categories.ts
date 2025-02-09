

import { useTranslation } from "react-i18next";
import type { Category } from "../types/map";

export const useCategories = () => {
  const { t } = useTranslation();

  const categories: Category[] = [
    {
      id: "beaches",
      name: t("destination.buttons.popular-beaches"),
      image: "/category-button-images/expt-03.jpg",
      locations: [
        { id: "bentota", name: "Bentota", category: "beaches", coordinates: { x: 15, y: 75 } },
        { id: "mirissa", name: "Mirissa", category: "beaches", coordinates: { x: 25, y: 85 } },
        { id: "unawatuna", name: "Unawatuna", category: "beaches", coordinates: { x: 20, y: 80 } },
        { id: "weligama", name: "Weligama", category: "beaches", coordinates: { x: 22, y: 82 } },
      ],
    },
    {
      id: "wildlife",
      name: t("destination.buttons.wildlife-nature"),
      image: "/category-button-images/expt-01.jpg",
      locations: [
        { id: "yala", name: "Yala", category: "wildlife", coordinates: { x: 75, y: 75 } },
        { id: "udawalawe", name: "Udawalawe", category: "wildlife", coordinates: { x: 55, y: 65 } },
      ],
    },
    {
      id: "adventure",
      name: t("destination.buttons.adventure"),
      image: "/category-button-images/expt-04.jpg",
      locations: [
        { id: "kitulgala", name: "Kitulgala", category: "adventure", coordinates: { x: 35, y: 45 } },
        { id: "ella", name: "Ella", category: "adventure", coordinates: { x: 65, y: 55 } },
      ],
    },
    {
      id: "culture",
      name: t("destination.buttons.history-culture"),
      image: "/category-button-images/expt-02.jpg",
      locations: [
        { id: "sigiriya", name: "Sigiriya", category: "culture", coordinates: { x: 45, y: 33 } },
        { id: "kandy", name: "Kandy", category: "culture", coordinates: { x: 50, y: 42 } },
      ],
    },
    {
      id: "lesser-travelled",
      name: t("destination.buttons.lesser-travelled"),
      image: "/category-button-images/expt-05.jpg",
      locations: [
        { id: "jaffna", name: "Jaffna", category: "lesser-travelled", coordinates: { x: 33, y: 13 } },
        { id: "trincomalee", name: "Trincomalee", category: "lesser-travelled", coordinates: { x: 70, y: 25 } },
      ],
    },
    {
      id: "gastronomy",
      name: t("destination.buttons.gastronomy"),
      image: "/category-button-images/expt-06.jpg",
      locations: [
        { id: "galle", name: "Galle", category: "gastronomy", coordinates: { x: 20, y: 80 } },
        { id: "colombo", name: "Colombo", category: "gastronomy", coordinates: { x: 15, y: 45 } },
      ],
    },
  ];

  return categories;
};
