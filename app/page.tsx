import Image from "next/image";
import { fontZuume } from "@/app/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className={"bg-left"}></div>
      <div className={"bg-right"}></div>
      <div className="relative flex place-items-center z-[-1]">
        <Image
          className="relative"
          src="/logo-byn.svg"
          alt="Miedo al Éxito"
          width={200}
          height={200}
          priority
        />
        <h1 aria-hidden={true} className={"hidden"}>
          Miedo al éxito
        </h1>
        <h2 className={`m-12 text-8xl font ${fontZuume.className}`}>
          Lo relevante
        </h2>
      </div>
    </main>
  );
}
