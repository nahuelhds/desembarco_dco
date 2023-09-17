import Image from "next/image";
import logo from "@/public/img/logo-byn.svg";
import { fontZuume } from "@/app/fonts";

export default function ThanksPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col place-content-evenly">
        <div className="mb-4 mt-8 flex flex-col place-content-center place-items-center text-center">
          <Image
            className="logo h-auto w-64"
            src={logo}
            alt="Miedo al Éxito"
            priority
          />
          <h1 aria-hidden={true} className={"hidden"}>
            Miedo al éxito
          </h1>
          <h2 className={`${fontZuume.className} my-16 text-5xl md:text-7xl`}>
            ¡Gracias por sumarte a esta comunidad!
          </h2>
          <a
            href={"../"}
            className="inline-flex items-center justify-center rounded-lg bg-violet-600 p-4 font-zuume text-xl text-violet-100 shadow-sm ring-1 ring-inset ring-violet-950 first:mt-0 last:mb-0 hover:bg-violet-700"
          >
            Volver a la home
          </a>
        </div>
      </main>
      <div className={"block bg-left opacity-5"}></div>
      <div className={"block bg-right opacity-5"}></div>
    </>
  );
}
