import "@/app/ui/globals.css";
import { Metadata } from "next";
import { openSans } from "@/app/ui/fonts";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scentra",
  description: "Waitlist for Scentra: the smart way to buy & sell fragrances",
  keywords: ["fragrance", "perfume", "cologne", "marketplace", "buy", "sell"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased`}>
        {children}

        <footer className="flex flex-col items-center justify-center w-full mb-10">
          <div className="flex flex-col items-center justify-center w-full max-w-4xl text-sm font-bold tracking-widest text-center py-6">
            {/* Logo */}
            <div className="w-full max-w-[300px] flex items-center justify-center">
              <Image
                src="text-logo.svg"
                alt="Scentra logo"
                width={955}
                height={120}
                unoptimized
                className="object-contain object-bottom"
              />
            </div>

            {/* Email Icon Button */}
            <a
              href="mailto:vuminhmatthew@gmail.com" // Replace with your email address
              aria-label="Send an email"
              className="mb-4"
            >
              <Image
                src="/email.svg"
                alt="Email Icon"
                width={37} // Explicit width for optimization
                height={27} // Aspect ratio based on provided dimensions
                className="object-contain cursor-pointer"
              />
            </a>

            {/* Footer Text */}
            <div className="self-stretch mt-6">
              {new Date().getFullYear()} © SCENTRA | ALL RIGHTS RESERVED
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
