import { SOCIAL_LINKS, SocialLink } from "@/config/social-links";
import Image from "next/image";

export function SocialLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-xl"}>
        Seguinos, compartí, faveá, activá la campana y todo lo que ya sabés.
      </p>
      <div
        className={
          "my-4 mb-12 flex flex-row items-center justify-center lg:mb-4"
        }
      >
        {SOCIAL_LINKS.map((socialLink) => (
          <div className={"m-2"} key={socialLink.link}>
            <SocialLink
              link={socialLink.link}
              icon={socialLink.icon}
              name={socialLink.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ name, icon, link }: SocialLink) {
  return (
    <a href={link} className="inline-flex w-full items-center justify-center">
      <Image src={icon} className={"mx-2 text-white"} alt={name} width={50} />
      <span className={"sr-only"} aria-hidden>
        {name}
      </span>
    </a>
  );
}
