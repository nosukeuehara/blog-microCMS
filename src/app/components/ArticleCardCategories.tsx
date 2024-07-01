import { TagType } from "@/type/types";
import React from "react";

const ArticleCardCategories = ({ tags }: { tags: TagType[] }) => {
  return (
    <div>
      {tags.map((tag) => {
        return (
          <span
            className=" mx-0.5 text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis"
            key={tag.id}
          >{`#${tag.name}`}</span>
        );
      })}
    </div>
  );
};

export default ArticleCardCategories;
