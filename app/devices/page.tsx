import type { Metadata } from "next";
import Image from "next/image";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
  title: "Devices | Landing",
  description: "Meet SafeSock, Landing's sensor sleeve for understanding weight bearing during recovery.",
};

export default function DevicesPage() {
  return (
    <SectionPage
      label="Devices"
      title="Meet SafeSock."
      intro="SafeSock is a Landing product designed to show how patients bear weight between appointments. A sensor-embedded sleeve fits inside a walking boot, cast, or brace and captures pressure patterns during movement."
      sectionTitle="From step to insight"
      details={[
        {
          heading: "Wear the sensor sleeve",
          text: "The thin sleeve is designed to sit inside common recovery supports, with no adhesive or external wires.",
        },
        {
          heading: "Follow weight bearing",
          text: "Embedded pressure sensors are intended to record load distribution and changes in weight bearing as patients move through recovery.",
        },
        {
          heading: "Review the trend",
          text: "The planned clinician view brings movement trends into the care conversation, giving therapists more context while they make their own clinical decisions.",
        },
      ]}
    >
      <section className="bg-[#0b0e32] px-6 py-24 text-[#f7fbfd] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] lg:gap-16">
          <div>
            <div className="h-1.5 w-12 rounded-full bg-[#eb662c]" aria-hidden="true" />
            <h2 className="mt-7 text-[clamp(2.4rem,4.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.045em]">See the SafeSock concept</h2>
            <p className="mt-6 text-base leading-8 text-[#dce9ef] sm:text-lg sm:leading-9">A short visualization of the SafeSock concept and its intended sensing workflow. The measurements shown are illustrative.</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-2">
              <Image src="/safesock-mark.png" alt="SafeSock product mark" width={56} height={56} className="h-12 w-12 rounded-lg object-cover" />
              <span className="text-sm font-semibold tracking-wide">SafeSock <span className="font-normal text-[#dce9ef]">by Landing</span></span>
            </div>
          </div>
          <video className="aspect-video w-full rounded-2xl bg-black object-cover shadow-[0_24px_80px_rgba(0,0,0,.25)]" controls playsInline preload="metadata" aria-label="SafeSock product concept video">
            <source src="/safesock-demo.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      </section>
    </SectionPage>
  );
}
