export type CandidateVoteCount = {
  name: string;
  lastName: string;
  voteCount: number;
  key: string;
};

export type CandidatePercentage = {
  name: string;
  lastName: string;
  percentage: number;
  key: string;
};

export type CandidatesPageProps = { params: { party: string, slice: number } }
