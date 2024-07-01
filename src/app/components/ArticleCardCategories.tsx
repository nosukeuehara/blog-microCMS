import { Tag } from "@/type/types";
import React from "react";

const ArticleCardCategories = ({ categories }: { categories: Tag[] }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <span
            className=" mx-0.5 text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis"
            key={category.id}
          >{`#${category.name}`}</span>
        );
      })}
    </div>
  );
};

export default ArticleCardCategories;
