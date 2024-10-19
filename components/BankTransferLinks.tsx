import { PaymentLink, BANK_TRANSFER_LINKS } from "@/config/payment-links";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export function BankTransferLinks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className={"text-center text-xl lg:text-2xl"}>
        Transferencia bancaria
      </p>
      <div
        className={
          "my-4 mb-12 flex w-full grid-cols-1 flex-row justify-center lg:mb-8"
        }
      >
        {BANK_TRANSFER_LINKS.map((payment) => (
          <div className={"w-72"} key={payment.link}>
            <PaymentLink link={payment.link} name={payment.name} />
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
      <SiWhatsapp
        className="-ml-1 mr-1 h-8 w-8 text-blue-100"
        aria-hidden="true"
      />
      {name}
    </a>
  );
}
