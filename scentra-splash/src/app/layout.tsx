import "@/app/ui/globals.css";
import { Metadata } from "next";
import { k2d } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Scentra",
  description: "Waitlist for Scentra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${k2d.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
