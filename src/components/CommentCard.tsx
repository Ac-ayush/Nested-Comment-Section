import { useState } from "react";
import "../styles.css";

import { Button } from "./Button";
import { CommentType, VoteActionType } from "../types/common";
import { CommentSection } from "./CommentSection";

interface CommentCardType {
  commentDetails: CommentType;
  onUpdateVote: (id: string, type: VoteActionType) => void;
  onAddReply: (id: string) => void;
  onDeleteReplyNode: (id: string) => void;
}

const CommentCard = ({
  commentDetails,
  onUpdateVote,
  onAddReply,
  onDeleteReplyNode,
}: CommentCardType) => {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <div className="comment-card-container">
      <div className="commnet-card">
        <div className="comment-content">
          <p className="comment-text">{commentDetails.text}</p>

          <div className="comment-meta">
            <span className="votes">{commentDetails.votes} votes</span>
          </div>
        </div>

        <div className="cta-sec">
          <Button
            text={"👍"}
            onClick={() => onUpdateVote(commentDetails.id, VoteActionType.up)}
          />
          <Button
            text={"👎"}
            onClick={() => onUpdateVote(commentDetails.id, VoteActionType.down)}
          />
        </div>
        <div className="bottom-ctas">
          {commentDetails.children.length > 0 && (
            <Button
              text={`${showReplies ? "👀 hide" : "👀 show"} replies`}
              onClick={() => setShowReplies((prev) => !prev)}
            />
          )}
          <Button
            text="↪️ reply"
            onClick={() => onAddReply(commentDetails.id)}
          />
          <Button
            text="❌ delete"
            onClick={() => onDeleteReplyNode(commentDetails.id)}
          />
        </div>
      </div>

      {showReplies && commentDetails.children && (
        <CommentSection
          key={Date.now()}
          dataList={commentDetails.children}
          onUpdateVote={onUpdateVote}
          onAddReply={onAddReply}
          onDeleteReplyNode={onDeleteReplyNode}
        />
      )}
    </div>
  );
};

export { CommentCard };
