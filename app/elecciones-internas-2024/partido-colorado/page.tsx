import { FIXED_DECIMALS, candidatesPC } from "@/config/internas";

const totalCount = candidatesPC.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);

export default function CandidatesPCPage() {
  return (
    <main className="party partido-colorado flex flex-row min-h-screen justify-evenly items-center">
      {candidatesPC
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
