"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = ({
  query,
  path,
}: {
  query: string;
  path: string;
}) => {
  const router = useRouter()
  const handlePageNavigation = (query: string) => {
    query === ""
      ? router.replace(`${path}`)
      : router.replace(`${path}?query=${query}`)
  };

  return (
    <div className=" justify-center mx-10">
      <p className=" text-xl font-semibold text-black pb-2">
        Search the article
      </p>
      <input
        type="search"
        defaultValue={query}
        onChange={(e) => {
          handlePageNavigation(e.target.value);
        }}
        className="px-2 rounded-sm ring-black focus:outline-none focus:ring-2 ring-1 w-full h-8"
      />
    </div>
  );
};

export default SearchBar;
