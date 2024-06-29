type Candidate = {
  name: string;
  percentage: number;
  key: string;
};

const FIXED_DECIMALS = 1;

const candidates: Candidate[] = [
  {
    key: "delgado",
    name: "Carolina Cosse",
    percentage: 44.54
  },
  {
    key: "raffo",
    name: "Yamandú Orsi",
    percentage: 88.36
  },
  {
    key: "gandini",
    name: "Andrés Lima",
    percentage: 3.2
  },
  {
    key: "iafigliola",
    name: "Andrés Lima",
    percentage: 3.2
  },
  {
    key: "corbran",
    name: "Andrés Lima",
    percentage: 3.2
  }
];

export default function CandidatesPNPage() {
  return (
    <main className="partido-nacional flex flex-row min-h-screen justify-evenly items-center">
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
