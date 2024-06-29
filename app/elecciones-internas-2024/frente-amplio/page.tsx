import { FIXED_DECIMALS, candidatesFA } from "@/config/internas";
import { Metadata } from "next";

const totalCount = candidatesFA.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);

export const metadata: Metadata = {
  title: "Frente Amplio - Resultados Elecciones Internas 2024 | Bunkerland - Miedo al éxito",
};

export default function CandidatesFAPage() {
  return (
    <main className="party frente-amplio flex flex-row min-h-screen justify-evenly items-center">
      {candidatesFA.map(({ key, voteCount, name, lastName }) =>
        <div key={key}>
          <div className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full percentage-container"}>
              <span
                className={"percentage flex items-center justify-center"}>{(voteCount * 100 / totalCount).toFixed(FIXED_DECIMALS)}%
              </span>
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
