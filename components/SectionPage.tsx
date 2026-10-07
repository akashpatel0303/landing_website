type SectionPageProps = {
  label: string;
  title: string;
  intro: string;
  sectionTitle: string;
  details: ReadonlyArray<{ heading: string; text: string }>;
  team?: ReadonlyArray<string>;
  children?: React.ReactNode;
};

export default function SectionPage({
  label,
  title,
  intro,
  sectionTitle,
  details,
  team,
  children,
}: SectionPageProps) {
  return (
    <main className="overflow-x-clip">
      <section className="flex min-h-[78svh] items-center bg-[#dbebf4] px-6 pb-20 pt-40 sm:px-10 sm:pb-24 sm:pt-44 lg:px-16">
        <div className="mx-auto w-full max-w-6xl">
          <p className="entrance text-xs font-semibold uppercase tracking-[0.18em] text-[#c9521e] sm:text-sm sm:tracking-[0.22em]">
            Landing / {label}
          </p>
          <div className="mt-10 grid items-end gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <h1 className="entrance entrance-delay-1 max-w-3xl text-[clamp(2.9rem,6.5vw,5.75rem)] font-semibold leading-[1.03] tracking-[-0.055em] text-[#0b0e32]">
              {title}
            </h1>
            <p className="entrance entrance-delay-2 max-w-2xl text-base leading-8 text-[#303856] sm:text-lg sm:leading-9">
              {intro}
            </p>
          </div>
          <div aria-hidden="true" className="entrance entrance-delay-3 mt-14 flex items-center gap-3 sm:mt-20">
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
              {sectionTitle}
            </h2>
          </div>
          <div className="divide-y divide-[#0b0e32]/15 border-t border-[#0b0e32]/15">
            {details.map(({ heading, text }) => (
              <article key={heading} className="py-7 sm:py-9">
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#0b0e32] sm:text-2xl">
                  {heading}
                </h3>
                <p className="mt-3 text-base leading-8 text-[#303856] sm:text-lg sm:leading-9">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {children}

      {team && (
        <section className="bg-[#0b0e32] px-6 py-24 text-[#f7fbfd] sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <span aria-hidden="true" className="mb-8 block h-1.5 w-12 rounded-full bg-[#eb662c]" />
            <h2 className="text-[clamp(2.4rem,4.8vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.045em]">
              Meet the team
            </h2>
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((name) => (
                <li key={name} className="border-t border-[#f7fbfd]/25 pt-5 text-xl font-medium sm:text-2xl">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
