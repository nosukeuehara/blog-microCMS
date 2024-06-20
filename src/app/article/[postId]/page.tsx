import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { Blog } from "../../../libs/microcms";

export default async function DetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  // const post = await getDetail(postId);
  const post: Blog = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/blog/${postId}`
  ).then((data) => data.json());

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
