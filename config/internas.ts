import { Candidate } from "@/app/types";

export const FIXED_DECIMALS = 1;

export const candidatesFA: Candidate[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    voteCount: 100
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    voteCount: 100
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    voteCount: 100
  }
].sort(sortByVoteCount);

export const candidatesPN: Candidate[] = [
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    voteCount: 100
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    voteCount: 100
  },
  {
    key: "gandini",
    name: "Jorge",
    lastName: "Gandini",
    voteCount: 100
  },
  {
    key: "iafigliola",
    name: "Carlos",
    lastName: "Iafigliola",
    voteCount: 100
  },
  {
    key: "corbran",
    name: "Roxana",
    lastName: "Corbran",
    voteCount: 100
  }
].sort(sortByVoteCount);

export const candidatesPC: Candidate[] = [
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

function sortByVoteCount(a: Candidate, b: Candidate) {
  if (a.voteCount === b.voteCount) {
    return a.lastName > b.lastName ? 1 : -1;
  }

  return a.voteCount < b.voteCount ? 1 : -1;
}