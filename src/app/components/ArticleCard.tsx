import { ArticleProps } from "@/type/types";
import Link from "next/link";
import React from "react";
import ArticleIcon from "./ArticleIcon";
import ArticleCardCategories from "./ArticleCardCategories";

const ArticleCard = ({ post }: ArticleProps) => {
  return (
    <article className="w-full bg-slate-50 transition hover:shadow-lg mb-4 sm:max-w-2xl">
      <Link href={`/home/${post.id}`}>
        <div className="flex">
          <div className=" mr-4">
            <ArticleIcon imagePath={post.eyecatch.url} />
          </div>
          <div>
            <h3 className=" text-lg font-semibold text-slate-600 line-clamp-2">
              {post.title}
            </h3>
            <div>
              <p className="text-sm text-slate-600">
                {Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(post.createdAt))}
              </p>
            </div>
            <div className="">
              <ArticleCardCategories tags={post.tags} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
