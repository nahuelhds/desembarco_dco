import Image from "next/image";
import logo from "../public/img/logo-byn.svg";

export function TradeMark() {
  return (
    <div className="my-4 mb-12 md:-mb-4 flex flex-col place-content-center place-items-center md:flex-row">
      <Image
        className="logo h-auto w-52 -mb-12 md:mb-0"
        src={logo}
        alt="DCO Stream"
        priority
      />
      <h1 aria-hidden={true} className={"hidden"}>
        DCO Stream
      </h1>
      <h2
        className={`mt-8 text-4xl md:ml-8 md:mt-0 md:text-5xl lg:text-6xl`}
      >
        No somos <em>neutrales.</em><br/><strong>Somos artiguistas.</strong>
      </h2>
    </div>
  );
}
