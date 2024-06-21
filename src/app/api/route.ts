import { Blog, getList } from "@/libs/microcms";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log("おこなまｍｓこあ");
  const searchParams = request.nextUrl.searchParams;
  const searchWord = searchParams.get("searchWord")!;
  const articles = await getList<Blog>("blogs");
  const filteredData = articles.contents.filter((data) =>
    data.content.includes(searchWord)
  );
  return Response.json(filteredData);
}
