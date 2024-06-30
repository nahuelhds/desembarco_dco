import { CandidateVoteCount, CandidatePercentage } from "@/app/types";

const candidatesFA: CandidatePercentage[] = [
  {
    key: "cosse",
    name: "Carolina",
    lastName: "Cosse",
    percentage: 36.2
  },
  {
    key: "orsi",
    name: "Yamandú",
    lastName: "Orsi",
    percentage: 60.1
  },
  {
    key: "lima",
    name: "Andrés",
    lastName: "Lima",
    percentage: 3.7
  }
].sort(sortByPercentage);

const candidatesPN: CandidatePercentage[] = [
  {
    key: "delgado",
    name: "Álvaro",
    lastName: "Delgado",
    percentage: 76.0
  },
  {
    key: "raffo",
    name: "Laura",
    lastName: "Raffo",
    percentage: 17.0
  },
  // {
  //   key: "gandini",
  //   name: "Jorge",
  //   lastName: "Gandini",
  //   percentage: 0
  // },
  // {
  //   key: "iafigliola",
  //   name: "Carlos",
  //   lastName: "Iafigliola",
  //   percentage: 0
  // },
  // {
  //   key: "corbran",
  //   name: "Roxana",
  //   lastName: "Corbran",
  //   percentage: 0
  // }
].sort(sortByPercentage);

const candidatesPC: CandidatePercentage[] = [
  {
    key: "ojeda",
    name: "Andrés",
    lastName: "Ojeda",
    percentage: 39
  },
  // {
  //   key: "viera",
  //   name: "Tabaré",
  //   lastName: "Viera",
  //   percentage: 0
  // },
  // {
  //   key: "silva",
  //   name: "Robert",
  //   lastName: "Silva",
  //   percentage: 0
  // },
  // {
  //   key: "gurmendez",
  //   name: "Gabriel",
  //   lastName: "Gurméndez",
  //   percentage: 0
  // },
  // {
  //   key: "ache",
  //   name: "Carolina",
  //   lastName: "Ache",
  //   percentage: 0
  // },
  // {
  //   key: "zaida",
  //   name: "Zaida",
  //   lastName: "González",
  //   percentage: 0
  // }
].sort(sortByPercentage);

export type Party = {
  name: string;
  candidates: CandidatePercentage[];
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

function sortByPercentage(a: CandidatePercentage, b: CandidatePercentage) {
  if (a.percentage === b.percentage) {
    return a.lastName > b.lastName ? 1 : -1;
  }

  if (a.percentage && b.percentage){
    return a.percentage < b.percentage ? 1 : -1;
  }

  return 0;
}