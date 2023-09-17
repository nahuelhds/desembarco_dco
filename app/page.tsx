import Image from "next/image";
import { fontZuume } from "@/app/fonts";
import logo from "../public/logo-byn.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className={"bg-left opacity-20 md:opacity-50"}></div>
      <div className={"bg-right opacity-20 md:opacity-50"}></div>
      <div className="relative flex flex-col place-content-center place-items-center md:flex-row">
        <Image
          className="logo relative h-64 w-64"
          src={logo}
          alt="Miedo al Éxito"
          priority
        />
        <h1 aria-hidden={true} className={"hidden"}>
          Miedo al éxito
        </h1>
        <h2 className={`text-7xl md:ml-8 md:text-8xl ${fontZuume.className}`}>
          Lo relevante
        </h2>
      </div>
    </main>
  );
}
