import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  tags: TagType[];
} & MicroCMSDate;

export type TagType = {
  id: string;
  name: string;
} & MicroCMSDate;

export interface MicroCMSResponse {
  contents: Blog[];
}

export interface ArticleProps {
  post: Blog;
  targetWords?: string;
}

type depthNumber = 0 | 1 | 2 | 3;
export interface MicroCMSQueries {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: string;
  fields?: string | string[];
  q?: string;
  depth?: depthNumber;
  ids?: string | string[];
  filters?: string;
  richEditorFormat?: 'html' | 'object';
}