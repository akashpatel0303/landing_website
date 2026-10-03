import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Product | LandingHealth",
};

export default function ProductPage() {
  return <SectionPage title="Product" />;
}
