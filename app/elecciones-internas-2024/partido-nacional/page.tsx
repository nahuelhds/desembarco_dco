type Candidate = {
  name: string;
  percentage: number;
  key: string;
};

const FIXED_DECIMALS = 1;

const candidates: Candidate[] = [
  {
    key: "delgado",
    name: "Álvaro Delgado",
    percentage: 60
  },
  {
    key: "raffo",
    name: "Laura Raffo",
    percentage: 20
  },
  {
    key: "gandini",
    name: "Jorge Gandini",
    percentage: 10
  },
  {
    key: "iafigliola",
    name: "Carlos Iafigliola",
    percentage: 6
  },
  {
    key: "corbran",
    name: "Roxana Corbran",
    percentage: 5
  }
];

export default function CandidatesPNPage() {
  return (
    <main className="party partido-nacional flex flex-row min-h-screen justify-evenly items-center">
      {candidates
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
