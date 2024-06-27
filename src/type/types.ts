import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

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

export interface ArticleProps {
  post: Blog;
  targetWords?: string
}