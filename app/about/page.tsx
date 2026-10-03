import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "About | LandingHealth",
};

export default function AboutPage() {
  return <SectionPage title="About" />;
}
