"use client";

import ArticleCard from "@/app/components/ArticleCard";
import SearchBar from "@/app/components/SearchBar";
import { Blog } from "@/libs/microcms";
import { parseContent } from "@/util/parseString";
import { usePathname, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const Page = ({ searchParams }: { searchParams: { q: string } }) => {
  const router = useRouter();
  const path = usePathname();
  const [articles, setArticles] = useState<Blog[]>();
  useEffect(() => {
    const fetchData = async () => {
      const contents = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/article/top`
      );
      const articles: Blog[] = await contents.json();
      setArticles(articles);
    };
    fetchData();
  }, [searchParams.q]);

  const filteresArticles = articles?.filter((article) => {
    return parseContent(article.content).includes(searchParams.q);
  });

  return (
    <div className="">
      <div>
        <SearchBar query={searchParams.q} path={path} router={router} />
      </div>
      {filteresArticles?.map((article) => {
        return (
          <div key={article.id} className=" flex flex-col items-center">
            <Suspense>
              <ArticleCard post={article} />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
