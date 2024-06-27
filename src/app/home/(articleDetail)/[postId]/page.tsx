import { getDetail, getList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { Blog } from "@/type/types";
import { parseContent } from "@/util/parseString";

export async function generateStaticParams() {
  const { contents } = await getList<Blog>("blogs");
  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
  searchParams: { _highlight },
}: {
  params: { postId: string };
  searchParams: { _highlight: string | undefined };
}) {
  const post = await getDetail<Blog>("blogs", postId);
  if (!post) {
    notFound();
  }
  const regex = new RegExp(`(${_highlight})`, "gi");
  const test = parseContent(post.content)
    .split(regex)
    .map((part, index) =>
      regex.test(part) ? (
        <span key={index} className=" bg-fuchsia-300">
          {part}
        </span>
      ) : (
        part
      )
    );

  if (_highlight !== undefined) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-5xl font-sans text-center mt-3 font-bold">
            {post.title}
          </h1>
          <p className="text-center text-gray-500 mt-2">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.createdAt))}
          </p>
        </div>
        <div className="prose prose-lg max-w-none">{test}</div>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-5xl font-sans text-center mt-3 font-bold">
            {post.title}
          </h1>
          <p className="text-center text-gray-500 mt-2">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.createdAt))}
          </p>
        </div>
        <div className="prose prose-lg max-w-none">{parse(post.content)}</div>
      </div>
    );
  }
}
