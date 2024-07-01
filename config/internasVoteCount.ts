import { CandidateVoteCount, CandidatePercentage } from "@/app/types";

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 260
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 449
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 36
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 2375
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 545
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 113
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 2
  },
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 2
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 100
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 100
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 100
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 100
  },
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 100
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 100
  }
].sort(sortByVoteCount);

export type Party = {
  name: string;
  candidates: CandidateVoteCount[];
};

export const PARTY: { [key: string]: Party } = {
  "frente-amplio": {
    name: "Frente Amplio",
    candidates: candidatesFA
  },
  "partido-colorado": {
    name: "Partido Colorado",
    candidates: candidatesPC
  },
  "partido-nacional": {
    name: "Partido Nacional",
    candidates: candidatesPN
  }
};

function sortByVoteCount(a: CandidateVoteCount, b: CandidateVoteCount) {
  if (a.voteCount === b.voteCount) {
    return a.lastName > b.lastName ? 1 : -1;
  }

  if (a.voteCount && b.voteCount) {
    return a.voteCount < b.voteCount ? 1 : -1;
  }

  return 0;
}