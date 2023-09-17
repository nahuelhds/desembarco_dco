import { INTERNATIONAL_PAYMENTS, PaymentLink } from "@/config/payment-links";
import { CurrencyDollarIcon } from "@heroicons/react/20/solid";

export function InternationalPaymentLinks() {
  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-0">
      <p className={"my-4 text-2xl"}>Estoy en el exterior</p>
      <div className={"flex w-full flex-row justify-center"}>
        {INTERNATIONAL_PAYMENTS.map((internationalPayment) => (
          <div
            className={"m-4 flex w-96 place-items-center"}
            key={internationalPayment.link}
          >
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
