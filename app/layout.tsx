import "./globals.css";
import { Metadata } from "next";
import { fontDMSans } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Miedo al éxito | Lo relevante",
  description: "Miedo al éxito | Lo relevante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontDMSans.className}>
      <body>{children}</body>
    </html>
  );
}
