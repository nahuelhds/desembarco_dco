import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";

export const fontDMSans = DM_Sans({ subsets: ["latin"] });

export const fontDco = localFont({
  src: "./fonts/Rubik-Regular.otf",
  display: "swap",
  variable: "--font-dco",
  preload: true,
});
