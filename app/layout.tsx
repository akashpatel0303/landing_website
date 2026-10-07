import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing",
  description: "Landing connects physical therapy practice tools with SafeSock movement insights.",
};

const navigation = [
  { label: "Product", href: "/product" },
  { label: "Solution", href: "/solution" },
  { label: "Devices", href: "/devices" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#dbebf4] text-[#0b0e32]">
        <header className="absolute inset-x-0 top-0 z-10 grid grid-cols-1 items-center gap-y-1 px-4 pt-5 sm:px-8 sm:pt-7 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            aria-label="Landing home"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eb662c]"
          >
            <Image
              src="/home-icon.png"
              alt=""
              width={1408}
              height={1408}
              loading="eager"
              unoptimized
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
          </Link>
          <nav aria-label="Primary navigation" className="flex w-full flex-wrap items-center justify-center justify-self-center gap-x-1 gap-y-1 md:col-start-2 md:row-start-1 md:w-auto md:gap-x-8">
            {navigation.map(({ label, href }) => (
              <Link
                key={href}
                className="rounded-sm px-0.5 py-2 text-[13px] font-medium transition-colors hover:text-[#eb662c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#eb662c] sm:px-1 sm:text-base sm:tracking-wide"
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
