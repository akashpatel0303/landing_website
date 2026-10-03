import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Schedule | LandingHealth",
};

export default function SchedulePage() {
  return <SectionPage title="Schedule" />;
}
