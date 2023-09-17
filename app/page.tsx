import { TradeMark } from "@/components/TradeMark";
import { SubscriptionOptions } from "@/components/SubscriptionOptions";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col place-content-evenly">
        <TradeMark />
        <SubscriptionOptions />
      </main>
      <div className={"block bg-left opacity-5"}></div>
      <div className={"block bg-right opacity-5"}></div>
    </>
  );
}
