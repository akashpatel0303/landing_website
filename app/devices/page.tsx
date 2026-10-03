import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Devices | LandingHealth",
};

export default function DevicesPage() {
  return <SectionPage title="Devices" />;
}
