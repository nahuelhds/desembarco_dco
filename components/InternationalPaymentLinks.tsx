import { INTERNATIONAL_PAYMENTS, PaymentLink } from "@/config/payment-links";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

export function InternationalPaymentLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-lg lg:text-2xl"}>Desde el exterior</p>
      <div
        className={
          "my-4 mb-12 flex w-full grid-cols-none flex-row justify-center lg:mb-4"
        }
      >
        {INTERNATIONAL_PAYMENTS.map((internationalPayment) => (
          <div className={"w-72"} key={internationalPayment.link}>
            <PaymentLink
              link={internationalPayment.link}
              name={internationalPayment.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentLink({ name, link }: PaymentLink) {
  return (
    <a
      href={link}
      className="inline-flex w-full items-center justify-center rounded-lg bg-violet-900 p-2 font-zuume text-xl text-violet-100 shadow-sm ring-1 ring-inset ring-violet-950 first:mt-0 last:mb-0 hover:bg-violet-700"
    >
      <CurrencyDollarIcon
        className="-ml-1 mr-1 h-8 w-8 text-violet-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
