import { filterCategories, getList } from "@/libs/microcms";
import ArticleCard from "@/app/components/ArticleCard";
import { Blog } from "@/type/types";
import Tab from "@/app/components/Tab";
;

export const revalidate = 10;

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
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const contents: Blog[] = await filterCategories(categoryId);

  if (contents.length === 0) {
    return (
      <div className=" flex flex-col items-center">
        <Tab categoryId={categoryId} />
        <div className=" flex justify-center items-center">no articles</div>
      </div>
    );
  } else {
    return (
      <div className=" flex flex-col items-center">
        <Tab categoryId={categoryId} />

        {contents.map((content) => (
          <ArticleCard key={content.id} post={content} />
        ))}
      </div>
    );
  }
}
