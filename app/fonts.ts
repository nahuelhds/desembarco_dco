import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const fontInter = Inter({ subsets: ["latin"] });

export const fontZuume = localFont({
  src: "./fonts/ZuumeRegular.ttf",
  display: "swap",
  variable: "--font-zuume",
});
