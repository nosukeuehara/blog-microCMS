import { getSpecificTags, getList } from "@/libs/microcms";
import ArticleCard from "@/app/components/ArticleCard";
import { Blog } from "@/type/types";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";
import Tag from "@/app/components/Tag";

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
  const contents: Blog[] = await getSpecificTags(categoryId);

  const filteredContents = contents.filter((content) =>
    content.categories.some((category) => category.id === categoryId)
  );

  const categoryDictionary = filteredContents.reduce((acc, content) => {
    content.categories.forEach(({ id, name }) => {
      if (!acc[id]) {
        acc[id] = name;
      }
    });
    return acc;
  }, {} as { [key: string]: string });

  if (contents.length === 0) {
    return (
      <div className=" flex flex-col items-center">
        <div>
          <Tag categoryId={categoryId} />
        </div>
        <div className=" flex justify-center items-center">no articles</div>
      </div>
    );
  }
  return (
    <Suspense fallback={<Loading />}>
      <div className="">
        <div className=" flex flex-col items-center">
          <div>
            <Tag categoryId={categoryId} />
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" text-sm text-slate-600 mb-3 mt-3">
            {`"#${categoryDictionary[categoryId]}"の記事一覧`}
          </div>
          {contents.map((content) => (
            <ArticleCard key={content.id} post={content} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
