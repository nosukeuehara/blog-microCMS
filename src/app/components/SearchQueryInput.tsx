"use client";

import React from "react";

const SearchQueryInput = ({
  query,
  navHandler,
}: {
  query: string | undefined;
  navHandler: (path: string) => void;
}) => {
  return (
    <div className=" justify-center mx-10">
      <p className=" text-xl font-semibold text-black pb-2">
        Search the article
      </p>
      <input
        type="search"
        defaultValue={query}
        onChange={(e) => {
          navHandler(e.target.value);
        }}
        className="px-2 rounded-sm ring-black focus:outline-none focus:ring-2 ring-1 w-full h-8"
      />
    </div>
  );
};

export default SearchQueryInput;
