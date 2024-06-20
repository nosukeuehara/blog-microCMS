import { Category, client } from "@/libs/microcms";

export async function GET() {

  if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }

  const resData = await fetch(`https://wondercloud.microcms.io/api/v1/categories`, {
    headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY },
    next: { revalidate: 3600 }
  })

  return Response.json(await resData.json());
}