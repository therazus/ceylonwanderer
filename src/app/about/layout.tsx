import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ceylon Wanderer",
  description: "Discover the passion and purpose behind Ceylon Wanderer - your trusted bridge between Germany and Sri Lanka.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
