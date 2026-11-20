import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aksara — LMS Sekolah",
  description:
    "Platform pembelajaran sekolah untuk admin, guru, siswa, dan orang tua. Kelola kelas, ujian, absensi, dan keuangan dalam satu tempat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
