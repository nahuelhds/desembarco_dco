import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { MONTHLY_SUBSCRIPTIONS, PaymentLink } from "@/config/payment-links";

function PaymentLink({ name, link }: PaymentLink) {
  return (
    <a
      href={link}
      className="mx-2 inline-flex w-36 items-center justify-center rounded-lg bg-violet-600 p-3 font-zuume text-2xl text-violet-100 shadow-md ring-1 ring-inset ring-violet-950 hover:bg-violet-700"
    >
      <CurrencyDollarIcon
        className="-ml-1.5 mr-2.5 h-10 w-10 text-violet-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}

export function SubscriptionOptions() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center md:flex-row">
      <p className={"m-6 mt-12  text-right text-3xl md:m-0"}>
        Suscribite mensualmente
      </p>
      <div className="flex flex-row place-content-start place-items-center">
        {MONTHLY_SUBSCRIPTIONS.map((monthlySubscription) => (
          <PaymentLink
            key={monthlySubscription.link}
            link={monthlySubscription.link}
            name={monthlySubscription.name}
          />
        ))}
      </div>
    </div>
  );
}
