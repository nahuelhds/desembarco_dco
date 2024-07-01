import { CandidateVoteCount } from "@/app/types";

export const voteProgress = 68.14;

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 95949
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 7058
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 156927
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 382
  },
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 155367
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 10889
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 511
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 40238
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 685
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 100
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 10429
  },
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 24854
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 13944
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 11047
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