type Candidate = {
  name: string;
  percentage: number;
  key: string;
};

const FIXED_DECIMALS = 1;

const candidates: Candidate[] = [
  {
    key: "ojeda",
    name: "Andrés Ojeda",
    percentage: 35
  },
  {
    key: "viera",
    name: "Tabaré Viera",
    percentage: 30
  },
  {
    key: "silva",
    name: "Robert Silva",
    percentage: 20
  },
  {
    key: "gurmendez",
    name: "Gabriel Gurméndez",
    percentage: 10
  },
  {
    key: "ache",
    name: "Carolina Ache",
    percentage: 6
  },
  {
    key: "zaida",
    name: "Zaida González",
    percentage: 4
  }
];

export default function CandidatesPCPage() {
  return (
    <main className="party partido-colorado flex flex-row min-h-screen justify-evenly items-center">
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
