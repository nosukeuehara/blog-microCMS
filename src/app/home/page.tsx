import ArticleCard from "@/app/components/ArticleCard";
import { Blog, getList } from "@/libs/microcms";
import Categories from "../components/Categories";

export const revalidate = 10;

export default async function StaticPage() {
  const { contents } = await getList<Blog>("blogs");

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className=" flex flex-col items-center">
      <div className="text-center mb-4">
        <Categories />
      </div>
      <ul className=" text-left">
        {contents.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
