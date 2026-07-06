import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Be_Vietnam_Pro({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-label",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Trần Đăng Khoa — Nhân viên Edit Video",
  description:
    "Video Editor dựng video ngắn và dài cho nhiều nền tảng mạng xã hội — cắt ghép, chỉnh màu, xử lý âm thanh và motion graphics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
