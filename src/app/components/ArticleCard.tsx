import { Blog } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ArticleProps {
  post: Blog;
}

const ArticleCard = ({ post }: ArticleProps) => {
  return (
    <ul>
      <li key={post.id} className="mb-4 mt-2">
        <Link
          href={`/article/${post.id}`}
          className="block hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src={post.eyecatch!.url}
              alt={"image"}
              width={150}
              height={150}
              className="w-full h-auto object-cover col-span-1 md:col-span-1"
            />
            <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
              <div>
                <div className="font-bold text-3xl">{post.title}</div>
                <div className="text-sm text-gray-600 mb-2">{`#${post.category.name}`}</div>
                <div className="text-sm text-gray-500">
                  {Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.createdAt))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default ArticleCard;
