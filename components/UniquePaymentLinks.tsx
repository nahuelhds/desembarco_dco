import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { PaymentLink, UNIQUE_PAYMENTS } from "@/config/payment-links";

export function UniquePaymentLinks() {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-0">
      <p className={"my-4 text-2xl"}>Hacer un aporte único</p>
      <div
        className={
          "grid w-full grid-cols-2 justify-center lg:flex lg:grid-cols-none lg:flex-row"
        }
      >
        {UNIQUE_PAYMENTS.map((uniquePayment) => (
          <div
            className={"m-4 lg:mx-2 lg:my-0 lg:w-40"}
            key={uniquePayment.link}
          >
            <PaymentLink link={uniquePayment.link} name={uniquePayment.name} />
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
      className="inline-flex w-full items-center justify-center rounded-lg bg-violet-600 p-4 font-zuume text-xl text-violet-100 shadow-sm ring-1 ring-inset ring-violet-950 first:mt-0 last:mb-0 hover:bg-violet-700"
    >
      <CurrencyDollarIcon
        className="-ml-1 mr-1 h-8 w-8 text-violet-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
