import { CandidateVoteCount } from "@/app/types";

export const voteProgress = 99.73;

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 154255
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 12820
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 242625
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 568
  },
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 241114
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 18862
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 840
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 62282
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 1158
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 170
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 18815
  },
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 40040
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 22708
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 18292
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