import { SOCIAL_LINKS, SocialLink } from "@/config/social-links";
import Image from "next/image";

export function SocialLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-xl"}>
        Seguinos, compartí, faveá, activá la campanita y todo lo que ya sabés.
      </p>
      <div
        className={
          "my-2 grid w-full grid-cols-3 place-content-evenly md:flex md:grid-cols-none md:flex-row lg:place-content-center"
        }
      >
        {SOCIAL_LINKS.map((socialLink, index) => (
          <div
            className={`mx-2 my-4 lg:mx-8 lg:my-4 ${
              index % 4 === 0 ? "grid-start-1" : ""
            }`}
            key={socialLink.link}
          >
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
      <Image src={icon} className={"mx-2 filter-mae"} alt={name} width={50} />
      <span className={"sr-only"} aria-hidden>
        {name}
      </span>
    </a>
  );
}
