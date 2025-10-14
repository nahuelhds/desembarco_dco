import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const fontDMSans = DM_Sans({ subsets: ["latin"] });

export const fontDco = localFont({
  src: [
    {
      path: "./fonts/Rubik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Rubik-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Rubik-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-dco",
  preload: true,
});
