export type Candidate = {
  name: string;
  lastName: string;
  voteCount: number;
  key: string;
};

export type CandidatesPageProps = { params: { party: string, slice: number } }
