import Link from "next/link";
import { Blog, MicroCMSResponse } from "../../../libs/microcms";
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
    <div className=" flex flex-col items-center">
      <ul className=" text-center">
        {contents.map((post) => {
          return (
            <li key={post.id} className=" mb-4 mt-4">
              <Link
                href={`/article/${post.id}`}
                className="grid grid-cols-2 gap-4"
              >
                <Image
                  src={post.eyecatch!.url}
                  alt={"image"}
                  width={200}
                  height={200}
                  className="col-span1"
                />
                <div className="col-span1 grid-cols-1">
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
  );
}
