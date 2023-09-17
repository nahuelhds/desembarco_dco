import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const fontZuume = localFont({
  src: "./fonts/ZuumeMedium.ttf",
  display: "swap",
  variable: "--font-zuume",
});

export const metadata: Metadata = {
  title: "Miedo al Éxito",
  description: "Miedo al Éxito | Lo relevante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontZuume.className}>
      <body>{children}</body>
    </html>
  );
}
