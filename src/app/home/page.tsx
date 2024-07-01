import ArticleCard from "@/app/components/ArticleCard";
import { getList } from "@/libs/microcms";
import { Blog } from "@/type/types";
import Tag from "../components/Tag";

export default async function StaticPage() {
  const { contents } = await getList<Blog>("blogs");

  if (!contents || contents.length === 0) {
    return <h1 className=" text-center">No contents</h1>;
  }

  return (
    <div className=" flex flex-col items-center">
      <Tag />
      {contents.map((post) => (
        <ArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
}
