import { TagType } from "@/type/types";
import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import { cache } from "react";

// TODO: データの再検証はオンデマンド式に変更する

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
async function _getList<T>(endpoint: string, queries?: MicroCMSQueries) {
  const listData = await client.getList<T>({
    endpoint,
    queries,
  });
  return listData;
}

// リクエストのキャッシュ
export const getList = cache(_getList)

// ブログの詳細を取得
async function _getDetail<T>(
  endpoint: string,
  contentId: string,
  queries?: MicroCMSQueries
) {
  const detailData = await client.getListDetail<T>({
    endpoint,
    contentId,
    queries,
  });

  return detailData;
}

// リクエストのキャッシュ
export const getDetail = _getDetail

// ブログのカテゴリ取得
export async function _getTags(queries?: MicroCMSQueries) {
  const categories = await client.getList<TagType>({
    endpoint: "categories",
    queries,
  });

  return categories;
}

// リクエストのキャッシュ
export const getTags = cache(_getTags)

export async function getSpecificTags(categoryId: string) {
  const { contents } = await fetch(
    `https://${process.env
      .MICROCMS_SERVICE_DOMAIN!}.microcms.io/api/v1/blogs?filters=categories[contains]${categoryId}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY! }, next: { revalidate: 10 } }
  ).then((result) => result.json());
  return contents;
}
