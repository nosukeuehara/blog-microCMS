import {
  Blog,
  MicroCMSResponse,
  filterCategories,
  getDetail,
  getList,
} from "@/libs/microcms";
import ArticleCard from "@/app/components/ArticleCard";
import Categories from "@/app/components/Categories";

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
  // const post = await getDetail<Blog>("blogs", categoryName);
  const contents: Blog[] = await filterCategories(categoryId);

  if (contents.length === 0) {
    return (
      <div className=" flex flex-col items-center">
        <div className="text-center mb-4">
          <Categories categoryId={categoryId} />
        </div>
        <div className=" flex justify-center items-center">no articles</div>
      </div>
    )
  } else {
    return (
      <div className=" flex flex-col items-center">
        <div className="text-center mb-4">
          <Categories categoryId={categoryId} />
        </div>
        <ul className=" text-left">
          {contents.map((content) => (
            <ArticleCard key={content.id} post={content} />
          ))}
        </ul>
      </div>
    );
  }
}
