import { CurrencyDollarIcon } from "@heroicons/react/20/solid";
import { MONTHLY_SUBSCRIPTION, PaymentLink } from "@/config/payment-links";

export function SubscriptionLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-2xl lg:text-4xl"}>Aportá mensualmente</p>
      <div
        className={
          "my-4 mb-12 grid w-full grid-cols-2 justify-center lg:mb-6 lg:flex lg:grid-cols-none lg:flex-row"
        }
      >
        {MONTHLY_SUBSCRIPTION.map((monthlySubscription) => (
          <div className={"m-2 lg:my-0 lg:w-48"} key={monthlySubscription.link}>
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
      className="inline-flex w-full items-center justify-center rounded-lg bg-transparent p-4 font-zuume text-xl text-violet-100 shadow-sm ring-1 ring-inset ring-violet-950 first:mt-0 last:mb-0 hover:bg-orange-700"
    >
      <CurrencyDollarIcon
        className="-ml-1 mr-1 h-8 w-8 text-violet-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
