import { FIXED_DECIMALS, PARTY, grandTotalVoteCount, voteProgress } from "@/config/internas";
import type { Metadata, ResolvingMetadata } from "next";

type CandidatesProps = {
  params: { party: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: CandidatesProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { name } = PARTY[params.party];
  // read route params
  return {
    title: `${name} - Resultados Elecciones Internas 2024 | Bunkerland - Miedo al éxito`
  };
}

const partialCount = Object.values(PARTY).reduce((previousValue, currentValue) => {
  const partyCount = currentValue.candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return previousValue + partyCount;
}, 0);

export default function CandidatesPage({ params }: CandidatesProps) {
  const { candidates } = PARTY[params.party];
  const totalPartyCount = candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return (
    <body className={"bg-black"}>
    <main className={`party ${params.party} flex flex-row justify-evenly items-center min-h-screen`}>
      {candidates.map(({ key, voteCount, name, lastName }) =>
        <div key={key}>
          <div className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full percentage-container"}>
              <span
                className={"percentage flex items-center justify-center"}>{(voteCount * 100 / totalPartyCount).toFixed(FIXED_DECIMALS)}%
              </span>
            </div>
          </div>
          <div className={"candidate-name flex flex-col items-center justify-center"}>
            <span className={"first-name"}>{name}</span>
            <span className={"last-name"}>{lastName}</span>
          </div>
        </div>
      )}
      <div className={"absolute bottom-2"}>
        <div className={"text-center bg-black px-4 py-2 rounded-2xl text-2xl"}>
          <label className={"font-bold"}>Total escrutinio:</label>
          {" "}
          <span>{voteProgress.toFixed(2)}%</span>
        </div>
      </div>
      <div className={"absolute bottom-2 left-2 hidden"}>
        <div className={"text-center bg-black px-4 py-2 rounded-2xl text-2xl"}>
          <label className={"font-bold"}>Participación:</label>
          {" "}
          <span>{(partialCount * 100 / grandTotalVoteCount).toFixed(2)}%</span>
        </div>
      </div>
    </main>
    </body>
  );
}
