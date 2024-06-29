import { FIXED_DECIMALS, candidatesPC } from "@/config/internas";
import { Metadata } from "next";

const totalCount = candidatesPC.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);

export const metadata: Metadata = {
  title: "Partido Colorado - Resultados Elecciones Internas 2024 | Bunkerland - Miedo al éxito",
};

export default function CandidatesPCPage() {
  return (
    <main className="party partido-colorado flex flex-row min-h-screen justify-evenly items-center">
      {candidatesPC.map(({ key, voteCount, name, lastName }) =>
        <div key={key}>
          <div className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full percentage-container"}>
              <div
                className={"percentage flex items-center justify-center"}>{(voteCount * 100 / totalCount).toFixed(FIXED_DECIMALS)}%
              </div>
            </div>
          </div>
          <div className={"candidate-name flex flex-col items-center justify-center"}>
            <span className={"first-name"}>{name}</span>
            <span className={"last-name"}>{lastName}</span>
          </div>
        </div>
      )}
    </main>
  );
}
