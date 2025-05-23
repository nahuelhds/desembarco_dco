import { INTERNATIONAL_PAYMENTS, PaymentLink } from "@/config/payment-links";
import { SiPaypal } from "@icons-pack/react-simple-icons";

export function InternationalPaymentLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-lg lg:text-2xl"}>Desde el exterior</p>
      <div
        className={
          "my-4 mb-12 flex w-full grid-cols-1 flex-row justify-center lg:mb-8"
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
      className="inline-flex w-full items-center justify-center rounded-lg bg-transparent p-2 text-xl text-blue-100 shadow-sm ring-1 ring-inset ring-blue-950 first:mt-0 last:mb-0 hover:bg-orange-700"
    >
      <SiPaypal
        className="-ml-1 mr-1 h-8 w-8 text-blue-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
