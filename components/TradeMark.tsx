import Image from "next/image";
import logo from "../public/img/logo-byn.svg";

export function TradeMark() {
  return (
    <div className="my-4 mb-8 flex flex-col place-content-center place-items-center md:flex-row">
      <Image
        className="logo h-auto w-52"
        src={logo}
        alt="Desembarco (DCO)"
        priority
      />
      <h1 aria-hidden={true} className={"hidden"}>
        Desembarco (DCO)
      </h1>
      <h2
        className={`mt-8 text-3xl md:ml-8 md:mt-0 md:text-6xl`}
      >
        Estamos mutando...
      </h2>
    </div>
  );
}
