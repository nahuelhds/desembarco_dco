import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import {
  PaymentLink as PaymentLinkType,
  UNIQUE_PAYMENTS_DI_BRASIL,
} from "@/config/payment-links";

export function DesordenEnBrasilLinks() {
  return (
    <div className="mx-auto my-6 w-full max-w-7xl px-4">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-black p-6 md:p-8 shadow-2xl ring-1 ring-orange-950">
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-normal">
          Ayudanos a cubrir las <strong>Elecciones de Brasil</strong>
        </p>
        <div className="my-4 max-w-6xl space-y-2 text-center text-base md:text-lg lg:text-xl text-orange-100/90 leading-relaxed">
          <p>
            Con <strong>Desorden Internacional</strong> queremos ir a cubrir la segunda vuelta electoral de Brasil.
          </p>
          <p>
            Colaborá con nosotros y ayudanos a cubrir este hecho central de la política regional.
          </p>
        </div>
        <div
          className={
            "my-0 grid w-full grid-cols-2 justify-center lg:mb-2 lg:flex lg:grid-cols-none lg:flex-row"
          }
        >
          {UNIQUE_PAYMENTS_DI_BRASIL.map((uniquePayment) => (
            <div className={"m-2 lg:my-0 lg:w-44"} key={uniquePayment.name}>
              <PaymentLink
                link={uniquePayment.link}
                name={uniquePayment.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PaymentLink({ name, link }: PaymentLinkType) {
  return (
    <a
      href={link}
      className="inline-flex w-full items-center justify-center rounded-lg bg-red-900 p-4 text-xl text-orange-100 shadow-sm ring-1 ring-inset ring-orange-950 first:mt-0 last:mb-0 hover:bg-orange-600"
    >
      <CurrencyDollarIcon
        className="-ml-1 mr-1 h-8 w-8 text-orange-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
