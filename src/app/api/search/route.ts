import { getList } from "@/libs/microcms";
import { NextRequest, NextResponse } from "next/server";
import { parseContent } from "@/util/parseString";
import { Blog } from "@/type/types";

export async function POST(req: NextRequest, res: Response) {
  const searchParams = await req.json();
  const articles = await getList<Blog>("blogs");
  const filteredData = articles.filter((data) =>
    parseContent(data.content).includes(searchParams.query)
  );
  if (filteredData.length === 0) {
    return new Response(null, { status: 204 });
  } else {
    return NextResponse.json(filteredData);
  }
}
