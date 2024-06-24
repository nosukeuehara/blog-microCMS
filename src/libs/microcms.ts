import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  category: {
    name: string;
    id: string;
  };
} & MicroCMSDate;

export type Category = {
  id: string;
  name: string;
} & MicroCMSDate;

export interface MicroCMSResponse {
  contents: Blog[];
}

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
export async function getList<T>(endpoint: string, queries?: MicroCMSQueries) {
  const listData = await client.getList<T>({
    endpoint,
    queries,
  });
  return listData;
}

// ブログの詳細を取得
export async function getDetail<T>(
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

// ブログのカテゴリ取得
export async function fetchCategories(queries?: MicroCMSQueries) {
  const categories = await client.getList<Category>({
    endpoint: "categories",
    queries,
  });

  return categories;
}

export async function filterCategories(categoryId: string) {
  const { contents } = await fetch(
    `https://${process.env
      .MICROCMS_SERVICE_DOMAIN!}.microcms.io/api/v1/blogs?filters=category[equals]${categoryId}`,
    { headers: { "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY! } }
  ).then((result) => result.json());
  return contents;
}
