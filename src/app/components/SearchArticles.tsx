"use client";

import { Blog } from "@/libs/microcms";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import { parseContent } from "@/util/parseString";
import SuggestList from "./SuggestList";
import React from "react";
import { useRouter } from "next/navigation";

function SearchArticles() {
  const [articles, setArticles] = useState<Blog[] | undefined>();
  const [suggestionsList, setSuggetionsList] = useState<Blog[] | undefined>();
  const [query, setQuery] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL!}/api/article/top`
      );
      const data = await res.json();
      setArticles(data.contents);
    };
    fetchData();
  }, []);

  const handleSearchArticles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setSuggetionsList(undefined);
    } else {
      const targetArticles = articles?.filter((article) =>
        parseContent(article.content).includes(value)
      );
      setSuggetionsList(targetArticles);
    }
  };

  return (
    <div className="py-3">
      <div className="flex items-center justify-end px-3">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={handleSearchArticles}
          placeholder="Search"
          className="px-5 focus:outline-none focus:ring-1 focus:w-4/6 focus:ring-blue-700 rounded-full w-8 sm:w-36 h-8 bg-slate-200 text-sm"
        />
      </div>
      {isInputFocused && suggestionsList !== undefined && (
        <Modal modalOpen={isInputFocused}>
          <SuggestList
            handleBlur={() => {
              setIsInputFocused(false);
              inputRef.current!.blur();
            }}
            suggestions={suggestionsList}
            keyword={query}
          />
        </Modal>
      )}
    </div>
  );
}

export default SearchArticles;
