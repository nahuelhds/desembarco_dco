// import FacebookIcon from "@/app/icons/facebook.svg";
import InstagramIcon from "@/app/icons/instagram.svg";
import SpotifyIcon from "@/app/icons/spotify.svg";
import TikTokIcon from "@/app/icons/tiktok.svg";
import XIcon from "@/app/icons/x.svg";
// import ThreadsIcon from "@/app/icons/threads.svg";
import TwitchIcon from "@/app/icons/twitch.svg";
import YouTubeIcon from "@/app/icons/youtube.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type SocialLink = {
  name: string;
  icon: StaticImport;
  link: string;
};

// All icons taken from https://simpleicons.org/

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "YouTube",
    icon: YouTubeIcon,
    link: "https://www.youtube.com/@desembarco_tv",
  },
  {
    name: "Twitch",
    icon: TwitchIcon,
    link: "https://www.twitch.tv/miedoalexito_uy",
  },
  {
    name: "Spotify",
    icon: SpotifyIcon,
    link: "https://open.spotify.com/show/0xlYUQCFKYmYqV1gp0MNtz?si=a910249d860943f9",
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
  // {
  //   name: "Threads",
  //   icon: ThreadsIcon,
  //   link: "https://www.threads.net/@miedoalexito_uy",
  // },
  // {
  //   name: "Facebook",
  //   icon: FacebookIcon,
  //   link: "https://www.facebook.com/miedoalexito.uy",
  // },
];
