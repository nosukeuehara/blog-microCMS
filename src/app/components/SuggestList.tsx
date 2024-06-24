import { Blog } from "@/libs/microcms";
import { parseContent } from "@/util/parseString";
import Link from "next/link";
import React from "react";

interface SuggestListProps {
  toggleModal: () => void,
  keywords: Blog[];
}

const SuggestList = (props: SuggestListProps) => {
  if (props.keywords.length !== 0) {
    return (
      <div className=" px-2 py-2">
        <ul>
          {props.keywords.map((item) => {
            return (
              <div
                key={item.id}
                className=" bg-slate-100 shadow-2xl rounded-md px-3 py-2 m-1"
              >
                <Link
                  href={`/home/${item.id}`}
                  key={item.id}
                  className=" shadow-2xl rounded-md "
                  onClick={() => {
                    props.toggleModal()
                  }}
                >
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
        </ul>
      </div>
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
