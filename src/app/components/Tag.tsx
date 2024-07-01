import { getList } from "@/libs/microcms";
import { TagType } from "@/type/types";
import Link from "next/link";
import React from "react";

const Tag = async ({ categoryId }: { categoryId?: string }) => {
  const tags = await getList<TagType>("tags");

  if (!tags || tags.length === 0) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">No categories</h1>
    );
  }
  return (
    <div className=" mb-2">
      <div className="sm:block">
        <nav className="flex gap-6" aria-label="Tabs">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/home/tag/${tag.id}`}
              className={`
                ${
                  categoryId === tag.id
                    ? " shrink-0  p-2 text-sm font-medium text-blue-700 "
                    : "shrink-0 p-2 text-sm font-medium text-gray-400 hover:text-blue-700 hover:cursor-pointer `"
                }`}
            >
              {`#${tag.name}`}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tag;
