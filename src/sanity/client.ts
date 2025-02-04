import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ahu1xswu",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});