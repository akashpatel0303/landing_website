type SectionPageProps = {
  title: string;
};

export default function SectionPage({ title }: SectionPageProps) {
  return (
    <main className="grid min-h-dvh place-items-center px-6 py-24">
      <div className="text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#eb662c]">
          LandingHealth
        </p>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          {title}
        </h1>
      </div>
    </main>
  );
}
