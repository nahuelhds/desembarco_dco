import Image from "next/image";

type Candidate = {
  name: string;
  percentage: number;
  key: string;
};

const candidates: Candidate[] = [
  {
    key: "cosse",
    name: "Carolina Cosse",
    percentage: 44.54
  },
  {
    key: "orsi",
    name: "Yamandú Orsi",
    percentage: 88.36
  },
  {
    key: "lima",
    name: "Andrés Lima",
    percentage: 3.2
  }
];
export default function CandidatesFAPage() {
  return (
    <main className="frente-amplio flex flex-row min-h-screen justify-evenly items-center">
      {candidates
        .sort((a, b) => a.percentage < b.percentage ? 1 : -1)
        .map(({ key, percentage }) =>
          <div key={key} className="parallelogram">
            <div className={`candidate ${key}`} />
            <div className={"absolute bottom-8 w-full"}>
              <div className={"percentage flex items-center justify-center"}>{percentage.toFixed(1)}%</div>
            </div>
          </div>
        )}
    </main>
  );
}
