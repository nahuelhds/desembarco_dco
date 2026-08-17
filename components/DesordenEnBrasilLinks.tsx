import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import {
  PaymentLink as PaymentLinkType,
  UNIQUE_PAYMENTS_DI_BRASIL,
} from "@/config/payment-links";

export function DesordenEnBrasilLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-2 max-w-3xl px-4 text-center text-2xl md:text-3xl lg:text-4xl">
        Ayudá al equipo de <strong><em>Desorden Internacional</em></strong> a ir
        a cubrir la segunda vuelta en <strong>Brasil</strong>
      </p>
      <div
        className={
          "my-4 mb-12 grid w-full grid-cols-2 justify-center lg:mb-6 lg:flex lg:grid-cols-none lg:flex-row"
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
