import { FIXED_DECIMALS, candidatesFA } from "@/config/internas";

const totalCount = candidatesFA.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);

export default function CandidatesFAPage() {
  return (
    <main className="party frente-amplio flex flex-row min-h-screen justify-evenly items-center">
      {candidatesFA.map(({ key, voteCount }) =>
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
