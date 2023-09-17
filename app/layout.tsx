import "./globals.css";
import { Metadata } from "next";
import { fontInter } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Miedo al Éxito | Lo relevante",
  description: "Miedo al Éxito | Lo relevante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontInter.className}>
      <body>{children}</body>
    </html>
  );
}
