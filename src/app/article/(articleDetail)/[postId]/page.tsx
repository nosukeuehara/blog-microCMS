import { Blog, MicroCMSResponse, getDetail, getList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import parse from "html-react-parser";

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
}: {
  params: { postId: string };
}) {
  const post = await getDetail<Blog>("blogs", postId);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>
        {Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(post.createdAt))}
      </h2>
      <div>{parse(post.content)}</div>
    </div>
  );
}
