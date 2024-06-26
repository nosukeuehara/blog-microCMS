import { Blog, getList } from "@/libs/microcms";
import { NextRequest, NextResponse } from "next/server";
import { parseContent } from "@/util/parseString";


export async function GET(req: NextRequest, res: Response) {
  const searchParams = req.nextUrl.searchParams
  const searchWord = searchParams.get("q")!
  if (searchWord === "") {
    return NextResponse.json([])
  } else {
    const articles = await getList<Blog>("blogs")
    const filteredData = articles.contents.filter((data) =>
      parseContent(data.content).includes(searchWord)
    );
    return NextResponse.json(filteredData)
  }
}