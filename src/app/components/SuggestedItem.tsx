import { parseContent } from "@/util/parseString";
import Link from "next/link";
import React from "react";
import { SuggestListProps } from "./SuggestList";

const SuggestedItem = (props: SuggestListProps) => {
  return (
    <div className=" shadow-2xl pt-2 rounded-md">
      {props.suggestions.map((item) => {
        return (
          <div
            onClick={() => {
              props.handleBlur();
            }}
            key={item.id}
            className="bg-slate-50 border-slate-100 border shadow-xl rounded-md px-3 py-2 mx-3 my-1"
          >
            <Link href={`/home/${item.id}`} key={item.id} className="">
              <span className=" text-sm">
                <p className=" font-medium text-slate-900">{item.title}</p>
                <p className=" text-slate-900">
                  {item.content.length < 20
                    ? parseContent(item.content)
                    : parseContent(item.content).slice(0, 20) + "..."}
                </p>
              </span>
              <p className=" text-xs text-slate-500 font-semibold">{`#${item.category.name}`}</p>
            </Link>
          </div>
        );
      })}
      <Link
        href={`/home/search?q=${props.keyword}`}
        className=" flex justify-center pt-3 pb-3 text-xs text-slate-400 underline underline-offset-1 cursor-pointer hover:font-bold"
        onClick={() => {
          props.handleBlur();
        }}
      >
        See all result
      </Link>
    </div>
  );
};

export default SuggestedItem;
