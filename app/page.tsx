import Image from "next/image";

const practiceCopy = [
  "Landing helps therapists anticipate demand and plan appointment availability around the needs of their practice. Patients can book online sessions, while AI agents help coordinate scheduling, reminders, and follow ups.",
  "For exercise planning, Landing helps therapists find exercises suited to treatment goals, available equipment, and the restrictions they define. Therapists can prepare personalized home exercise guides with clear instructions and schedules, giving patients a practical reference between sessions.",
  "As the ecosystem develops, patient check ins and device measurements can help therapists prepare for appointments and identify where additional attention may be needed. Bringing these details together gives therapists a clearer picture of each patient’s experience in one place.",
];

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="flex min-h-svh items-center bg-[#dbebf4] px-6 pb-20 pt-40 sm:px-10 sm:pb-24 sm:pt-44 lg:px-16 lg:pt-40">
        <div className="mx-auto w-full max-w-6xl">
          <Image
            src="/logo.png"
            alt="LandingHealth"
            width={1107}
            height={142}
            priority
            unoptimized
            className="entrance h-auto w-56 sm:w-72 lg:w-80"
          />

          <div className="mt-11 grid items-end gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <h1 className="entrance entrance-delay-1 max-w-3xl text-[clamp(2.9rem,7vw,5.75rem)] font-semibold leading-[1.03] tracking-[-0.055em] text-[#0b0e32]">
              A connected operating system for physical therapy
            </h1>
            <p className="entrance entrance-delay-2 max-w-2xl text-base leading-8 text-[#303856] sm:text-lg sm:leading-9">
              Landing brings connected devices and intelligent software
              together to help physical therapists manage their practices and
              deliver care beyond the clinic. Our device ecosystem, including
              SafeSock, captures movement data that gives therapists greater
              insight into their patients’ activity. The platform connects that
              information with scheduling, exercise planning, and patient
              communication, supporting the work that happens before, during,
              and between appointments.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="entrance entrance-delay-3 mt-14 flex items-center gap-3 sm:mt-20"
          >
            <span className="h-1.5 w-12 rounded-full bg-[#eb662c]" />
            <span className="h-px flex-1 bg-[#0b0e32]/15" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfd] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
          <div>
            <span aria-hidden="true" className="mb-7 block h-1.5 w-12 rounded-full bg-[#eb662c]" />
            <h2 className="max-w-lg text-[clamp(2.4rem,4.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#0b0e32]">
              Support for your practice and your patients
            </h2>
          </div>
          <div className="divide-y divide-[#0b0e32]/15 border-t border-[#0b0e32]/15">
            {practiceCopy.map((paragraph, index) => (
              <div key={paragraph} className="grid gap-4 py-7 sm:grid-cols-[2.5rem_1fr] sm:gap-6 sm:py-9">
                <span aria-hidden="true" className="text-sm font-semibold tabular-nums text-[#d55823]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-8 text-[#303856] sm:text-lg sm:leading-9">
                  {paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0e32] px-6 py-24 text-[#f7fbfd] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-6xl">
          <span aria-hidden="true" className="mb-8 block h-1.5 w-12 rounded-full bg-[#eb662c]" />
          <h2 className="max-w-4xl text-[clamp(2.4rem,4.8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
            More time for patient care
          </h2>
          <p className="mt-8 max-w-3xl text-base leading-8 text-[#dce9ef] sm:mt-10 sm:text-xl sm:leading-9">
            Our goal is to help physical therapists support more patients while
            preserving the attention each person deserves. Landing’s devices
            provide meaningful context, and its AI agents help with the
            coordination and administrative work surrounding care. Therapists
            remain responsible for exercise plans and clinical decisions, with
            one connected system supporting their work.
          </p>
        </div>
      </section>
    </main>
  );
}
