
// TODO: データの再検証はオンデマンド式に変更する

import { MicroCMSQueries } from "@/type/types";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export type ENDPOINTS = 'blogs' | 'tags'

// ブログ・タグのリストを取得
export async function getList<Blog>(endpoint: ENDPOINTS, queries?: MicroCMSQueries): Promise<Blog[]> {
  const { contents } = await fetch(`${process.env.MICROCMS_API_URL}/${endpoint}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY!
    },
    next: { revalidate: 10 }
  }).then(res => res.json())
  return contents
}

// ブログの詳細取得
export async function getDetail<Blog>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Blog> {
  const article = await fetch(`${process.env.MICROCMS_API_URL}/${endpoint}/${contentId}`, {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY!
    },
    next: { revalidate: 10 }
  }).then(res => res.json())

  return article
}

export async function getSpecificArticles(tagId: string) {
  const { contents } = await fetch(
    `https://${process.env
      .MICROCMS_SERVICE_DOMAIN!}.microcms.io/api/v1/blogs?filters=tags[contains]${tagId}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY! }, next: { revalidate: 10 } }
  ).then((result) => result.json());
  return contents;
}
