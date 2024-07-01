import { CandidateVoteCount } from "@/app/types";

export const voteProgress = 72.83;

const candidatesFA: CandidateVoteCount[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 104635
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 7634
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 169648
  }
].sort(sortByVoteCount);

const candidatesPN: CandidateVoteCount[] = [
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 404
  },
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 167302
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 11799
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 545
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 43149
  }
].sort(sortByVoteCount);

const candidatesPC: CandidateVoteCount[] = [
  {
    key: "ache",
    name: "Carolina",
    lastName: "Ache",
    voteCount: 739
  },
  {
    key: "zaida",
    name: "Zaida",
    lastName: "González",
    voteCount: 110
  },
  {
    key: "gurmendez",
    name: "Gabriel",
    lastName: "Gurméndez",
    voteCount: 11387
  },
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    voteCount: 26765
  },
  {
    key: "silva",
    name: "Robert",
    lastName: "Silva",
    voteCount: 15007
  },
  {
    key: "viera",
    name: "Tabaré",
    lastName: "Viera",
    voteCount: 11802
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