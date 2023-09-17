import { TradeMark } from "@/components/TradeMark";
import { SubscriptionOptions } from "@/components/SubscriptionOptions";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-center">
        <TradeMark />
        <SubscriptionOptions />
      </main>
      <div className={"block bg-left opacity-10 md:opacity-30"}></div>
      <div className={"block bg-right opacity-10 md:opacity-30"}></div>
    </>
  );
}
