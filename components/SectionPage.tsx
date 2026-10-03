import Link from "next/link";

type SectionPageProps = {
  title: string;
};

export default function SectionPage({ title }: SectionPageProps) {
  return (
    <main className="grid min-h-dvh place-items-center px-6 py-24">
      <div className="text-center">
        <Link
          href="/"
          className="mb-4 inline-block rounded-sm text-sm font-medium uppercase tracking-[0.25em] text-[#eb662c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb662c]"
        >
          LandingHealth
        </Link>
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          {title}
        </h1>
      </div>
    </main>
  );
}
