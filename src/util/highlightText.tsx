import React from "react";
import { parseContent } from "./parseString";
import { Blog } from "@/type/types";

const highlightText = (post: Blog, targetWords: string | undefined) => {
  const { title, content } = post;
  const _content = parseContent(content);
  const _title = parseContent(title);
  const regex = new RegExp(`(${targetWords})`, "gi");
  const highlightedTitle = _title.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={`title-${index}`} className=" bg-fuchsia-300">
        {part}
      </span>
    ) : (
      part
    )
  );
  const highlightedContent = _content.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={`content-${index}`} className=" bg-fuchsia-300">
        {part}
      </span>
    ) : (
      part
    )
  );
  return { highlightedTitle, highlightedContent };
};

export default highlightText;
