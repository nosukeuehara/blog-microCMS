"use client";
import SearchBar from "@/app/components/SearchBar";
import SuggestedArticleCard from "@/app/components/SuggestedArticleCard";
import { Blog } from "@/type/types";
import { parseContent } from "@/util/parseString";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {
  const path = usePathname();
  const [articles, setArticles] = useState<Blog[] | null>([]);
  const query = useSearchParams().get("query");

  useEffect(() => {
    const fetchData = async () => {
      const contents = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/article/top`
      );

      const articles: Blog[] = await contents.json();
      setArticles(articles);
    };
    fetchData();
  }, []);

  const handlePageNavigation = useCallback(
    (query: string) => {
      query === ""
        ? window.history.replaceState({}, "", path)
        : window.history.pushState(
            { query: query },
            "",
            `${path}?query=${query}`
          );
    },
    [path]
  );

  useEffect(() => {
    if (query !== null) {
      handlePageNavigation(query);
    } else {
      handlePageNavigation("");
    }
  }, [handlePageNavigation, query]);

  if (query === null || articles === null) {
    return (
      <div>
        <div>
          <SearchBar query={""} navHandler={handlePageNavigation} />
        </div>
        <div className=" flex justify-center items-center mt-16">
          no articles
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <SearchBar query={query} navHandler={handlePageNavigation} />
        </div>
        {articles
          .filter((article) => parseContent(article.content).includes(query))
          .map((article) => {
            return (
              <div key={article.id} className="flex flex-col items-center">
                <SuggestedArticleCard post={article} targetWords={query} />
              </div>
            );
          })}
      </div>
    );
  }
};

export default Page;
