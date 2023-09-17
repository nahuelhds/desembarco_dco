import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { MONTHLY_SUBSCRIPTIONS, PaymentLink } from "@/config/payment-links";

export function SubscriptionOptions() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className={"my-4 text-2xl"}>Suscribite mensualmente</p>
      <div className={"w-full items-center justify-center md:flex md:flex-row"}>
        {MONTHLY_SUBSCRIPTIONS.map((monthlySubscription) => (
          <div
            className={"my-4 first:mt-0 md:mx-2 md:my-0 md:w-40"}
            key={monthlySubscription.link}
          >
            <PaymentLink
              link={monthlySubscription.link}
              name={monthlySubscription.name}
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
