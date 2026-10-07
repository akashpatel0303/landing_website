import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import LoadSignal from "@/components/LoadSignal";

export const metadata: Metadata = {
  title: "Product | Landing",
  description: "Landing connects physical therapy practice tools with movement context from SafeSock.",
};

export default function ProductPage() {
  return (
    <SectionPage
      label="Product"
      title="One connected place for care."
      intro="Landing is building a connected workspace for physical therapists. Practice tools support scheduling, exercise planning, and communication, while SafeSock adds a view of weight bearing between appointments."
      sectionTitle="What comes together"
      details={[
        {
          heading: "SafeSock movement context",
          text: "SafeSock is a sensor-embedded sleeve designed to fit inside a walking boot, cast, or brace. Its pressure sensors are intended to capture load distribution and weight-bearing patterns during recovery.",
        },
        {
          heading: "Practice coordination",
          text: "Landing brings appointment availability, patient communication, and home exercise planning into a shared workflow for therapists.",
        },
        {
          heading: "Therapist-led decisions",
          text: "The intended dashboard gives clinicians trends to review alongside each patient’s plan. Therapists remain responsible for exercise plans and clinical decisions.",
        },
      ]}
    >
      <section className="bg-[#f7fbfd] px-6 pb-24 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
        <div className="mx-auto max-w-6xl">
          <LoadSignal />
        </div>
      </section>
    </SectionPage>
  );
}
