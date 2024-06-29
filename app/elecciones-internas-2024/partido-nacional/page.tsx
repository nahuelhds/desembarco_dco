import { FIXED_DECIMALS, candidatesPN } from "@/config/internas";

export default function CandidatesPNPage() {
  return (
    <main className="party partido-nacional flex flex-row min-h-screen justify-evenly items-center">
      {candidatesPN
        .sort((a, b) => a.percentage < b.percentage ? 1 : -1)
        .map(({ key, percentage }) =>
          <div key={key} className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full percentage-container"}>
              <div className={"percentage flex items-center justify-center"}>{percentage.toFixed(FIXED_DECIMALS)}%</div>
            </div>
          </div>
        )}
    </main>
  );
}
