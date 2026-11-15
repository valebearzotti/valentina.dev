import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/layout/container";
import { UnderConstruction } from "@/components/layout/under-construction";
import { Analytics } from "@vercel/analytics/next";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const isUnderConstruction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: "Valentina Bearzotti",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.variable}>
        {isUnderConstruction ? (
          <UnderConstruction />
        ) : (
          <Container>{children}</Container>
        )}
        <Analytics />
      </body>
    </html>
  );
}
