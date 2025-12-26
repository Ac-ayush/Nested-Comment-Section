export interface CommentType {
  id: string;
  text: string;
  votes: number;
  children: CommentType[] | [];
}

export enum VoteActionType {
  up = "up",
  down = "down",
}
