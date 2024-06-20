import Link from "next/link";
import { Blog, MicroCMSResponse } from "../../libs/microcms";
import Image from "next/image";

export default async function StaticPage() {
  // const { contents } = await getList();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`);
  const data: MicroCMSResponse = await response.json();
  const contents = data.contents;

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
                <Link
                  href={`/article/${post.id}`}
                  className="flex items-center space-x-4 p-4 bg-white shadow"
                >
                  <Image
                    src={post.eyecatch!.url}
                    alt={"image"}
                    width={500}
                    height={500}
                    className="flex-shrink-0"
                  />
                  <div className="text-lg font-semibold">
                    <div>{post.title}</div>
                    <div>{post.category.name}</div>
                    <div>
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date(post.createdAt))}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
