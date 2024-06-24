import { Blog, getList } from "@/libs/microcms";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const artiles = await getList<Blog>("blogs");
  return Response.json(artiles);
}
