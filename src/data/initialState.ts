import { CommentType } from "../types/common";

const commentDataList: CommentType[] = [
  {
    id: "1",
    text: "Bro is better than butter",
    votes: 3,
    children: [
      {
        id: "2",
        text: "Man see, man cry, man scroll",
        votes: 1,
        children: [],
      },
    ],
  },
  {
    id: "3",
    text: "You Drop this (miccc)",
    votes: 5,
    children: [
      {
        id: "4",
        text: "Environment is healing",
        votes: 2,
        children: [],
      },
    ],
  },
];

export default commentDataList;
