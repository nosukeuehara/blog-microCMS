import Link from "next/link";
import { getList } from "../../libs/microcms";
import Image from "next/image";

export default async function StaticPage() {
  const { contents } = await getList();

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!contents || contents.length === 0) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">No contents</h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <ul className="space-y-4">
          {contents.map((post) => {
            return (
              <li
                key={post.id}
                className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition duration-300"
              >
                <Image
                  src={post.eyecatch!.url}
                  alt={"image"}
                  width={500}
                  height={500}
                />
                <Link
                  href={`/article/${post.id}`}
                  className="text-xl font-semibold text-blue-500 hover:text-blue-700"
                >
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
