import { getList } from "@/libs/microcms";
import { Blog } from "@/type/types";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const articles = await getList<Blog>("blogs")
  return Response.json(articles);
}
