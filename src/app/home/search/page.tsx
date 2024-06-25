import SearchArticles from "@/app/components/SearchArticles";
import { Blog, client, getList } from "@/libs/microcms";
import React from "react";

const Page = async ({ searchParams }: { searchParams: { q: string } }) => {
  // ページ遷移後はクエリパラメータで取得した値を再度検索バーに埋め込むことで該当するページを取得する
  return (
    <SearchArticles />
  )
};

export default Page;
