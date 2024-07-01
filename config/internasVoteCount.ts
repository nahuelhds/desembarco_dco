import { CandidateVoteCount, CandidatePercentage } from "@/app/types";

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 2453
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 216
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 4375
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 4
  },
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 4477
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 256
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 7
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 950
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 7
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 1
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 249
  },
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 447
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 315
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 378
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