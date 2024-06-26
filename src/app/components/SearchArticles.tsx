"use client";

import { Blog } from "@/libs/microcms";
import { useState, useEffect } from "react";
import Modal from "./Modal";
import SuggestList from "./SuggestList";
import React from "react";
import { parseContent } from "@/util/parseString";

function SearchArticles() {
  const [articles, setArticles] = useState<Blog[] | undefined>();
  const [suggestions, setSuggestions] = useState<Blog[] | undefined>();
  const [query, setQuery] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

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

  const filteringArticles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setSuggestions(undefined);
    } else {
      const targetArticles = articles?.filter((article) =>
        parseContent(article.content).includes(value)
      );
      setSuggestions(targetArticles);
    }
  };

  return (
    <div className="py-3">
      <div className="flex items-center justify-end px-3">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onFocus={() => setIsInputFocused(true)}
          // onBlurはフォーカスが外れたときに呼ばれる関数なので
          // 別アクションが起因でフォーカスを「外す」場合には使えない。
          // よってDOMを取得しておくことで外部のアクション実行時にフォーカスを外す事ができ
          //よって以下の関数が発火してModalを閉じる。
          onBlur={() => {
            setIsInputFocused(false);
          }}
          onChange={(e) => {
            filteringArticles(e);
          }}
          placeholder="Search"
          className="px-5 focus:outline-none focus:ring-1 focus:w-4/6 focus:ring-blue-700 rounded-full w-full sm:w-36 h-8 bg-slate-200 text-sm"
        />
      </div>
      {isInputFocused && suggestions !== undefined && (
        <Modal modalOpen={isInputFocused}>
          <SuggestList
            blurInput={() => {
              setIsInputFocused(false);
              inputRef.current!.blur();
            }}
            suggestions={suggestions}
            keyword={query}
          />
        </Modal>
      )}
    </div>
  );
}

export default SearchArticles;
