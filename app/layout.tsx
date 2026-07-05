import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Anton } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-label",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const impact = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Alex Mercer — Video Editor",
  description:
    "Video editor crafting cinematic stories — editing, color grading, motion graphics and sound design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} ${impact.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
