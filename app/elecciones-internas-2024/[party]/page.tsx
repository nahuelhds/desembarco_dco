import { FIXED_DECIMALS, PARTY } from "@/config/internas";
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

export default function CandidatesPage({ params }: CandidatesProps) {
  const { candidates } = PARTY[params.party];
  const totalCount = candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return (
    <main className={`party ${params.party} flex flex-row min-h-screen justify-evenly items-center`}>
      {candidates.map(({ key, voteCount, name, lastName }) =>
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
