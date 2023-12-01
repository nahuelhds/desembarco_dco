import { TradeMark } from "@/components/TradeMark";
import { SubscriptionLinks } from "@/components/SubscriptionLinks";
import { UniquePaymentLinks } from "@/components/UniquePaymentLinks";
import { InternationalPaymentLinks } from "@/components/InternationalPaymentLinks";
import { SocialLinks } from "@/components/SocialLinks";
import { BankTransferLinks } from "@/components/BankTransferLinks";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col place-content-evenly">
        <TradeMark />
        <SocialLinks />
        <SubscriptionLinks />
        <UniquePaymentLinks />
        <InternationalPaymentLinks />
        <BankTransferLinks />
      </main>
      <div className={"bg-left opacity-5"}></div>
      <div className={"bg-right opacity-5"}></div>
    </>
  );
}
