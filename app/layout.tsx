import "./globals.css";
import { Metadata } from "next";
import { fontDMSans } from "@/app/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Miedo al éxito | Lo relevante",
  description: "Separando la señal del ruido",
  openGraph: {
    title: "Miedo al éxito | Lo relevante",
    description: "Separando la señal del ruido",
    images: ["/img/metadata-logo.jpg"],
  },
  twitter: {
    title: "Miedo al éxito",
    description: "Lo relevante",
    images: ["/img/metadata-logo.jpg"],
  },
  appleWebApp: {
    title: "Miedo al éxito | Lo relevante",
    startupImage: ["/img/metadata-logo.jpg"],
  },
  keywords: [
    "miedo al éxito",
    "Lo relevante",
    "uruguay",
    "uruguaya",
    "uruguayo",
    "valoramos tu tiempo",
    "separando la señal del ruido",
    "comunidad",
    "independiente",
    "información",
    "crítica",
    "realidad uruguaya",
    "contenido digital",
    "creador de contenido",
    "creadores de contenido",
    "humor",
    "dinamismos",
    "datos",
    "plataforma digital",
    "medio de comunicación",
    "comunicación",
    "medios",
    "noticias",
    "resumen semanal",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={fontDMSans.className}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-DYT6J2BCM9" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DYT6J2BCM9');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
