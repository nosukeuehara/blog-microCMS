import { TagType } from "@/type/types";
import React from "react";

// TODO: タグのレイアウト修正
const ArticleCardTag = ({ tags }: { tags: TagType[] }) => {
  return (
    <div>
      {tags.map((tag) => {
        return (
          <div
            className=" mx-0.5 text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis"
            key={tag.id}
          >{`#${tag.name}`}</div>
        );
      })}
    </div>
  );
};

export default ArticleCardTag;
