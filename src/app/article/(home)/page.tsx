import ArticleCard from "@/app/components/ArticleCard";
import { Blog, getList } from "@/libs/microcms";

export const revalidate = 10;

export default async function StaticPage() {
  const { contents } = await getList<Blog>("blogs");

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className=" flex flex-col items-center">
      <ul className=" text-left">
        {contents.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
