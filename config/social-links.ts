import YouTubeIcon from "@/app/icons/youtube.svg";
import TikTokIcon from "@/app/icons/tiktok.svg";
import InstagramIcon from "@/app/icons/instagram.svg";
import XIcon from "@/app/icons/x.svg";
import FacebookIcon from "@/app/icons/facebook.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SocialLink = {
  name: string;
  icon: StaticImport;
  link: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    link: "https://www.youtube.com/@miedoalexito_uy",
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    link: "https://www.tiktok.com/@miedoalexito_uy",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://instagram.com/miedoalexito_uy",
  },
  {
    name: "X",
    icon: XIcon,
    link: "https://twitter.com/miedoalexito_uy",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/miedoalexito.uy",
  },
];
