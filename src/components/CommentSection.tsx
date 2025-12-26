import { useState } from "react";
import "../styles.css";

import { CommentCard } from "./CommentCard";
import { CommentType, VoteActionType } from "../types/common";

interface CommentSectionType {
  dataList: CommentType[];
  onUpdateVote: (id: string, type: VoteActionType) => void;
  onAddReply: (id: string) => void;
  onDeleteReplyNode: (id: string) => void;
}

const CommentSection = ({
  dataList,
  onUpdateVote,
  onAddReply,
  onDeleteReplyNode,
}: CommentSectionType) => {
  return (
    <div className="commnet-list">
      {dataList.map((comment) => {
        return (
          <CommentCard
            key={comment.id}
            commentDetails={comment}
            onUpdateVote={onUpdateVote}
            onAddReply={onAddReply}
            onDeleteReplyNode={onDeleteReplyNode}
          />
        );
      })}
    </div>
  );
};

export { CommentSection };
