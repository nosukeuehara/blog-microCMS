import { getDetail, getList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import { Blog } from "@/type/types";
import highlightText from "@/util/highlightText";
import { formatRichText } from "@/libs/utils";
import styles from "./index.module.css";

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

  if (_highlight !== undefined) {
    const { highlightedTitle, highlightedContent } = highlightText(
      post,
      _highlight
    );
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-5xl font-sans text-center mt-3 font-bold text-slate-600">
            {highlightedTitle}
          </h1>
          <p className="text-center text-gray-500 mt-2">
            {Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.createdAt))}
          </p>
        </div>
        <div className="flex justify-center">
          {/* <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(parse(highlightedContent))}`,
              }}
              /> */}
          <div>{highlightedContent}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-5xl font-sans text-center mt-3 font-bold text-slate-700">
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
        <div className="flex justify-center">
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: `${formatRichText(post.content)}`,
            }}
          />
        </div>
      </div>
    );
  }
}
