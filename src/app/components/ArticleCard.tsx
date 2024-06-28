import { ArticleProps } from "@/type/types";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ post }: ArticleProps) => {
  return (
    <article className=" px-5 my-2 w-full bg-white p-4 transition hover:shadow-lg  sm:p-4 sm:max-w-2xl sm:px-14">
      <Link href={`/home/${post.id}`}>
        <h3 className="mt-0.5 text-lg font-semibold text-slate-600 line-clamp-2">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis">
          {post.category.name}
        </p>
        <p className="text-sm text-slate-600">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(post.createdAt))}
        </p>
      </Link>
    </article>
  );
};

export default ArticleCard;
