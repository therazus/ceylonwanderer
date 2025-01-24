import type { Category } from "../types/map";

export const categories: Category[] = [
  {
    id: "beaches",
    name: "Popular Beaches",
    image: "/expt-03.jpg", // Root-relative path to the image
    locations: [
      { id: "bentota", name: "Bentota", category: "beaches", coordinates: { x: 15, y: 75 } },
      { id: "mirissa", name: "Mirissa", category: "beaches", coordinates: { x: 25, y:85 } },
      { id: "unawatuna", name: "Unawatuna", category: "beaches", coordinates: { x: 20, y: 80 } },
      { id: "weligama", name: "Weligama", category: "beaches", coordinates: { x: 22, y: 82 } },
    ],
  },
  {
    id: "wildlife",
    name: "Wildlife & Nature",
    image: "/expt-01.jpg", // Same image for this category
    locations: [
      { id: "yala", name: "Yala", category: "wildlife", coordinates: { x: 75, y: 75 } },
      { id: "udawalawe", name: "Udawalawe", category: "wildlife", coordinates: { x: 55, y: 65 } },
    ],
  },
  {
    id: "adventure",
    name: "Adventure",
    image: "/expt-04.jpg", // Same image for this category
    locations: [
      { id: "kitulgala", name: "Kitulgala", category: "adventure", coordinates: { x: 35, y: 45 } },
      { id: "ella", name: "Ella", category: "adventure", coordinates: { x: 65, y: 55 } },
    ],
  },
  {
    id: "culture",
    name: "History & Culture",
    image: "/expt-02.jpg", // Same image for this category
    locations: [
      { id: "sigiriya", name: "Sigiriya", category: "culture", coordinates: { x: 45, y: 33 } },
      { id: "kandy", name: "Kandy", category: "culture", coordinates: { x: 50, y: 42 } },
    ],
  },
  {
    id: "lesser-travelled",
    name: "Lesser Travelled",
    image: "/expt-05.jpg", // Same image for this category
    locations: [
      { id: "jaffna", name: "Jaffna", category: "lesser-travelled", coordinates: { x: 33, y: 13 } },
      { id: "trincomalee", name: "Trincomalee", category: "lesser-travelled", coordinates: { x: 70, y: 25 } },
    ],
  },
  {
    id: "gastronomy",
    name: "Gastronomy",
    image: "/expt-06.jpg", // Same image for this category
    locations: [
      { id: "galle", name: "Galle", category: "gastronomy", coordinates: { x: 20, y: 80 } },
      { id: "colombo", name: "Colombo", category: "gastronomy", coordinates: { x: 15, y: 45 } },
    ],
  },
];
