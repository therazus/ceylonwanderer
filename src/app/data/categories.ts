

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
        // South Coast Beaches
        { id: "unawatuna", name: "Unawatuna", category: "beaches", coordinates: { x: 42, y: 92 } },
        { id: "mirissa", name: "Mirissa", category: "beaches", coordinates: { x: 49, y: 94 } },
        { id: "hikkaduwa", name: "Hikkaduwa", category: "beaches", coordinates: { x: 39, y: 89 } },
        { id: "weligama", name: "Weligama", category: "beaches", coordinates: { x: 44, y: 93 } },
        // East Coast Beaches
        { id: "arugam-bay", name: "Arugam Bay", category: "beaches", coordinates: { x: 73, y: 69 } },
        { id: "kalkudah", name: "Kalkudah", category: "beaches", coordinates: { x: 66, y: 43 } },
        { id: "pasikuda", name: "Pasikuda", category: "beaches", coordinates: { x: 67, y: 44 } },
        { id: "nilaveli", name: "Nilaveli", category: "beaches", coordinates: { x: 61, y: 34 } },
        // West Coast & Around Colombo
        { id: "negombo", name: "Negombo", category: "beaches", coordinates: { x: 35, y: 75 } },
        // Remote & Less Crowded Beaches
        { id: "tangalle", name: "Tangalle", category: "beaches", coordinates: { x: 53, y: 91 } },
        { id: "kalpitiya", name: "Kalpitiya", category: "beaches", coordinates: { x: 31, y: 40 } },
      ],
    },
    {
      id: "wildlife",
      name: t("destination.buttons.wildlife-nature"),
      image: "/category-button-images/expt-01.jpg",
      locations: [
        // National Parks & Wildlife Sanctuaries
        { id: "yala", name: "Yala National Park", category: "wildlife", coordinates: { x: 72, y: 78 } },
        { id: "udawalawe", name: "Udawalawe National Park", category: "wildlife", coordinates: { x: 53, y: 84 } },
        { id: "wilpattu", name: "Wilpattu National Park", category: "wildlife", coordinates: { x: 35, y: 43 } },
        { id: "minneriya", name: "Minneriya National Park", category: "wildlife", coordinates: { x: 56, y: 43 } },
        { id: "kaudulla", name: "Kaudulla National Park", category: "wildlife", coordinates: { x: 59, y: 41 } },
        // Forests & Biodiversity Hotspots
        { id: "sinharaja", name: "Sinharaja Rainforest Reserve", category: "wildlife", coordinates: { x: 44, y: 88 } },
        { id: "horton-plains", name: "Horton Plains National Park", category: "wildlife", coordinates: { x: 53, y: 74} },
        // Marine & Coastal Ecosystems
        { id: "pigeon-island", name: "Pigeon Island National Park", category: "wildlife", coordinates: { x: 64, y: 32 } },
        // Turtle Conservation
        { id: "rekawa", name: "Rekawa Turtle Hatchery", category: "wildlife", coordinates: { x: 60, y: 89 } },
        { id: "kosgoda", name: "Kosgoda Turtle Hatchery", category: "wildlife", coordinates: { x: 38, y: 88 } },
      ],
    },
    {
      id: "adventure",
      name: t("destination.buttons.adventure"),
      image: "/category-button-images/expt-04.jpg",
      locations: [
        { id: "kitulgala", name: "Kitulgala", category: "adventure", coordinates: { x: 44, y: 80 } },
        { id: "arugam-bay-surf", name: "Arugam Bay", category: "adventure", coordinates: { x: 73, y: 69 } },
        { id: "ella", name: "Ella", category: "adventure", coordinates: { x: 59, y: 75 } },
        { id: "knuckles", name: "Knuckles Mountain Range", category: "adventure", coordinates: { x: 53, y: 60 } },
        { id: "nuwara-eliya", name: "Nuwara Eliya", category: "adventure", coordinates: { x: 51, y: 71 } },
        { id: "sigiriya-adventure", name: "Sigiriya", category: "adventure", coordinates: { x: 52, y: 48 } },
        { id: "adams-peak", name: "Adam's Peak", category: "adventure", coordinates: { x: 47, y: 74 } },
        { id: "kalpitiya-adventure", name: "Kalpitiya", category: "adventure", coordinates: { x: 31, y: 40 } },
        { id: "mirissa-adventure", name: "Mirissa", category: "adventure", coordinates: { x: 49, y: 94 } },
        { id: "hikkaduwa-adventure", name: "Hikkaduwa", category: "adventure", coordinates: { x: 39, y: 89 } },
        { id: "meemure", name: "Meemure", category: "adventure", coordinates: { x: 55, y: 57 } },
      ],
    },
    {
      id: "culture",
      name: t("destination.buttons.history-culture"),
      image: "/category-button-images/expt-02.jpg",
      locations: [
        { id: "anuradhapura", name: "Anuradhapura", category: "culture", coordinates: { x: 44, y: 38 } },
        { id: "polonnaruwa", name: "Polonnaruwa", category: "culture", coordinates: { x: 53, y: 43 } },
        { id: "sigiriya", name: "Sigiriya", category: "culture", coordinates: { x: 52, y: 48 } },
        { id: "dambulla", name: "Dambulla Cave Temple", category: "culture", coordinates: { x: 48, y: 51 } },
        { id: "kandy", name: "Kandy", category: "culture", coordinates: { x: 50, y: 63 } },
        { id: "galle-fort", name: "Galle Fort", category: "culture", coordinates: { x: 42, y: 92 } },
        { id: "mihintale", name: "Mihintale", category: "culture", coordinates: { x: 48, y: 39 } },
        { id: "nuwara-eliya-culture", name: "Nuwara Eliya", category: "culture", coordinates: { x: 51, y: 71 } },
        { id: "kataragama", name: "Kataragama", category: "culture", coordinates: { x: 64, y: 82 } },
      ],
    },
    {
      id: "lesser-travelled",
      name: t("destination.buttons.lesser-travelled"),
      image: "/category-button-images/expt-05.jpg",
      locations: [
        { id: "ritigala", name: "Ritigala", category: "lesser-travelled", coordinates: { x: 47, y: 44 } },
        { id: "madulsima", name: "Madulsima", category: "lesser-travelled", coordinates: { x: 61, y: 70 } },
        { id: "yapahuwa", name: "Yapahuwa", category: "lesser-travelled", coordinates: { x: 42, y: 46 } },
        { id: "gal-oya", name: "Gal Oya National Park", category: "lesser-travelled", coordinates: { x: 65, y: 66 } },
        { id: "buduruwagala", name: "Buduruwagala", category: "lesser-travelled", coordinates: { x: 60, y: 80 } },
        { id: "nawadankulama", name: "Nawadankulama", category: "lesser-travelled", coordinates: { x: 35, y: 48 } },
        { id: "thanthirirmale", name: "Thanthirirmale", category: "lesser-travelled", coordinates: { x: 40, y: 22 } },
        { id: "arankele", name: "Arankele Forest Monastery", category: "lesser-travelled", coordinates: { x: 44, y: 51} },
        { id: "mahiyanganaya", name: "Mahiyanganaya", category: "lesser-travelled", coordinates: { x: 56, y: 69 }  },
        { id: "kuragala", name: "Kuragala", category: "lesser-travelled", coordinates: { x: 53, y: 79 } },
        { id: "kumana", name: "Kumana National Park", category: "lesser-travelled", coordinates: { x: 70, y: 77 } },
      ],
    },
    {
      id: "gastronomy",
      name: t("destination.buttons.gastronomy"),
      image: "/category-button-images/expt-06.jpg",
      locations: [
        { id: "colombo", name: "Colombo", category: "gastronomy", coordinates: { x: 34, y: 67 } },
        { id: "galle", name: "Galle", category: "gastronomy", coordinates: { x: 42, y: 92 } },
      ],
    },
  ];

  return categories;
};
