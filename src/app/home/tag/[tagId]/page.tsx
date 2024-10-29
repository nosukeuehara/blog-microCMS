import { getSpecificArticles, getList } from "@/libs/microcms";
import ArticleCard from "@/app/components/ArticleCard";
import { Blog } from "@/type/types";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";
import Tag from "@/app/components/Tag";

export default async function StaticDetailPage({
  params: { tagId },
}: {
  params: { tagId: string };
}) {
  const contents: Blog[] = await getSpecificArticles(tagId);

  const filteredContents = contents.filter((content) =>
    content.tags.some((tag) => tag.id === tagId)
  );

  const categoryDictionary = filteredContents.reduce((acc, content) => {
    content.tags.forEach(({ id, name }) => {
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
          <Tag categoryId={tagId} />
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
            <Tag categoryId={tagId} />
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" text-sm text-slate-600 mb-3 mt-3">
            {`"#${categoryDictionary[tagId]}"の記事一覧`}
          </div>
          {contents.map((content) => (
            <ArticleCard key={content.id} post={content} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
