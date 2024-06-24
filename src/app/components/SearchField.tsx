"use client";

import { Blog } from "@/libs/microcms";
import { useState, ChangeEventHandler, useEffect } from "react";
import Modal from "./Modal";
import { parseContent } from "@/util/parseString";
import SuggestList from "./SuggestList";

function SearchField() {
  const [articles, setArticles] = useState<Blog[] | undefined>();
  const [target, setTarget] = useState<Blog[] | undefined>();
  const [query, setQuery] = useState<string | undefined>("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL!}/api/article/top`
      );
      const articles = await res.json();
      setArticles(articles.contents);
      return articles;
    };
    fetchData();
  }, []);

  const handleSerchArticles: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === "") {
      setQuery("");
      setTarget(undefined);
    } else {
      setQuery(e.target.value);
      const targetArticles = articles?.filter((article) => {
        return parseContent(article.content).includes(e.target.value);
      });
      setTarget(targetArticles);
    }
  };

  return (
    <div className=" py-3">
      <div className="flex items-center justify-end px-3">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSerchArticles(e)}
          placeholder="Search"
          className=" px-5 focus:outline-none focus:ring-2 focus:ring-blue-700 rounded-full w-36 h-8 bg-slate-200 text-sm"
        />
      </div>
      {target !== undefined ? (
        <Modal>
          <SuggestList keywords={target} />
        </Modal>
      ) : null}
    </div>
  );
}

export default SearchField;
