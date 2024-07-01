import { CandidateVoteCount } from "@/app/types";

export const voteProgress = 51.05;

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 66661
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 4641
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 111648
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 269
  },
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 114253
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 7477
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 382
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 28964
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 448
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 60
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 7081
  },
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 17643
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 9937
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 8163
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