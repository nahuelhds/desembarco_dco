import { FIXED_DECIMALS, candidatesPN } from "@/config/internas";

const totalCount = candidatesPN.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);

export default function CandidatesPNPage() {
  return (
    <main className="party partido-nacional flex flex-row min-h-screen justify-evenly items-center">
      {candidatesPN
        .sort((a, b) => a.voteCount < b.voteCount ? 1 : -1)
        .map(({ key, voteCount }) =>
          <div key={key} className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full percentage-container"}>
              <div
                className={"percentage flex items-center justify-center"}>{(voteCount * 100 / totalCount).toFixed(FIXED_DECIMALS)}%
              </div>
            </div>
          </div>
        )}
    </main>
  );
}
