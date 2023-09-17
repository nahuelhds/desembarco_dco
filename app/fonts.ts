import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const fontDMSans = DM_Sans({ subsets: ["latin"] });

export const fontZuume = localFont({
  src: "./fonts/ZuumeRegular.ttf",
  display: "swap",
  variable: "--font-zuume",
  preload: true,
});
