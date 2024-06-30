import { PARTY, ZOCALO_FIXED_DECIMALS, ZOCALO_CANDIDATES_QTY } from "@/config/internas";
import type { Metadata, ResolvingMetadata } from "next";

type CandidatesProps = {
  params: { party: string, slice: number }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: CandidatesProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { name } = PARTY[params.party];
  // read route params
  return {
    title: `${name} - Zócalo Resultados Elecciones Internas 2024 | Bunkerland - Miedo al éxito`
  };
}

const partialCount = Object.values(PARTY).reduce((previousValue, currentValue) => {
  const partyCount = currentValue.candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return previousValue + partyCount;
}, 0);

export default function CandidatesPage({ params }: CandidatesProps) {
  const { candidates } = PARTY[params.party];
  const sliceStart = params.slice * ZOCALO_CANDIDATES_QTY;
  const sliceEnd = (params.slice+1) * ZOCALO_CANDIDATES_QTY;
  const totalPartyCount = candidates.reduce((previousValue, currentValue) => previousValue + currentValue.voteCount, 0);
  return (
    <body className={"bg-black"}>
    <main className={`zocalo ${params.party} flex flex-row items-center bg-black`}>
      <div className={"party-name flex-grow-0 p-4"}>{PARTY[params.party].name}</div>
      <div className={"flex-grow flex flex-row justify-around"}>
        {candidates.slice(sliceStart, sliceEnd).map(({ key, voteCount, name, lastName }) =>
          <div key={key} className={"flex flex-row justify-center items-center"}>
            <div className={`candidate ${key}`} />
            <div className={"candidate-name flex flex-col justify-around px-8"}>
              <span className={"last-name uppercase"}>{lastName}</span>
              <strong
                className={"percentage"}>{(voteCount * 100 / totalPartyCount).toFixed(ZOCALO_FIXED_DECIMALS)}%</strong>
            </div>
          </div>
        )}
      </div>
    </main>
    </body>
  );
}
