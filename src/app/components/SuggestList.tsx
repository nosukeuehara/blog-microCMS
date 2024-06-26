import { Blog } from "@/libs/microcms";
import React from "react";
import SuggestedItem from "./SuggestedItem";

export interface SuggestListProps {
  blurInput: () => void;
  suggestions: Blog[];
  keyword: string;
}

const SuggestList = (props: SuggestListProps) => {
  if (props.suggestions.length !== 0) {
    return (
      <SuggestedItem
        blurInput={props.blurInput}
        suggestions={props.suggestions}
        keyword={props.keyword}
      />
    );
  } else {
    return (
      <div className=" px-2 py-2 flex justify-center items-center h-60">
        <span className=" text-slate-600">No result</span>
      </div>
    );
  }
};

export default SuggestList;
