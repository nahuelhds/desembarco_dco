import Image from "next/image";
import { fontZuume } from "@/app/fonts";
import logo from "../public/img/logo-byn.svg";

export function TradeMark() {
  return (
    <div className="flex flex-col place-content-center place-items-center md:flex-row">
      <Image
        className="logo h-64 w-64"
        src={logo}
        alt="Miedo al Éxito"
        priority
      />
      <h1 aria-hidden={true} className={"hidden"}>
        Miedo al éxito
      </h1>
      <h2 className={`${fontZuume.className} text-7xl md:ml-8 md:text-8xl `}>
        Lo relevante
      </h2>
    </div>
  );
}
