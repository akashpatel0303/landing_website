import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "LandingHealth",
  description: "LandingHealth",
};

const navigation = [
  { label: "Product", href: "/product" },
  { label: "Solution", href: "/solution" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#dbebf4] text-[#0b0e32]">
        <header className="absolute inset-x-0 top-0 z-10 px-4 pt-6 sm:pt-8">
          <nav aria-label="Primary navigation" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 sm:gap-x-10">
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                className="rounded-sm px-1 py-2 text-sm font-medium tracking-wide transition-colors hover:text-[#eb662c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb662c] sm:text-base"
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
