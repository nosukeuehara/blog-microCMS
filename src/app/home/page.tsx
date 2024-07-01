import ArticleCard from "@/app/components/ArticleCard";
import { getList } from "@/libs/microcms";
import { Blog } from "@/type/types";
import Tag from "../components/Tag";

export default async function StaticPage() {
  const articles = await getList<Blog>("blogs");

  if (!articles || articles.length === 0) {
    return <h1 className=" text-center">No contents</h1>;
  }

  return (
    <div className=" flex flex-col items-center">
      <Tag />
      {articles.map((post) => (
        <ArticleCard key={post.id} post={post} />
      ))}
    </div>
  );
}
