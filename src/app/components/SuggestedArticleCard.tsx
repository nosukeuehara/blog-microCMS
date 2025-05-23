import { ArticleProps } from "@/type/types";
import highlightText from "@/util/highlightText";
import Link from "next/link";
import React from "react";
import ArticleCardCategories from "./ArticleCardCategories";

const SuggestedArticleCard = ({ post, targetWords }: ArticleProps) => {
  const { highlightedTitle, highlightedContent } = highlightText(
    post,
    targetWords
  );

  return (
    <article className=" px-5 my-2 w-full p-4  hover:shadow-lg sm:p-4 sm:max-w-2xl sm:px-14">
      <Link href={`/home/${post.id}?_highlight=${targetWords}`}>
        <h3 className="mt-0.5 text-xl font-semibold text-slate-600 line-clamp-2">
          {highlightedTitle}
        </h3>
        <span className="mt-0.5 text-sm text-slate-400 line-clamp-2">
          {highlightedContent}
        </span>
        <div className="mt-2 text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">
          <ArticleCardCategories tags={post.tags} />
        </div>
        <div className="text-sm text-slate-600">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(post.createdAt))}
        </div>
      </Link>
    </article>
  );
};

export default SuggestedArticleCard;
