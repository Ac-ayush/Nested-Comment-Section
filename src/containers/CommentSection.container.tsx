import { useState } from "react";
import "../styles.css";
import initialDataList from "../data/initialState";

import { CommentType, VoteActionType } from "../types/common";
import { CommentSection } from "../components/CommentSection";

const CommentSectionContainer = () => {
  const [data, setData] = useState<CommentType[]>(initialDataList || []);

  const onAddReply = (parentId: string) => {
    const newReply = prompt(" Drop a reply: ");

    if (!newReply) return;

    const updateDataList = (dataList: CommentType[]) => {
      if (!dataList || !dataList.length) return [];

      return dataList.map((comment): CommentType => {
        if (comment.id === parentId) {
          const newNodeReply = {
            id: Date.now().toString(),
            text: newReply,
            votes: 0,
            children: [],
          };

          return {
            ...comment,
            children: [...comment.children, newNodeReply],
          };
        }

        if (comment.children) {
          return {
            ...comment,
            children: updateDataList(comment.children),
          };
        }

        return comment;
      });
    };

    setData((prev) => updateDataList(prev));
  };

  const onUpdateVote = (idToUpdate: string, type: VoteActionType) => {
    const onUpdateCount = (dataList: CommentType[]) => {
      if (!dataList || !dataList.length) return [];

      return dataList.map((comment): CommentType => {
        if (comment.id === idToUpdate) {
          return {
            ...comment,
            votes:
              type === VoteActionType.up
                ? comment.votes + 1
                : Math.max(0, comment.votes - 1),
          };
        }

        if (comment.children) {
          return {
            ...comment,
            children: onUpdateCount(comment.children),
          };
        }

        return comment;
      });
    };

    setData((prev) => onUpdateCount(prev));
  };

  const onDeleteReplyNode = (nodeToDelete: string) => {
    const deleteConfirmation = prompt(
      `Comfirmation: Write 'hao' in input to delete id: ${nodeToDelete}`
    );
    if (deleteConfirmation !== "hao") {
      return;
    }
    const updateTree = (dataList: CommentType[]): CommentType[] => {
      if (!dataList || !dataList.length) return [];

      return dataList
        .filter((comment) => comment.id !== nodeToDelete)
        .map((comment) => ({
          ...comment,
          children: updateTree(comment.children),
        }));
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <CommentSection
      dataList={data}
      onUpdateVote={onUpdateVote}
      onAddReply={onAddReply}
      onDeleteReplyNode={onDeleteReplyNode}
    />
  );
};

export { CommentSectionContainer };
