import { Blog, getList } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;

export default async function StaticPage() {
  const { contents } = await getList<Blog>("blogs");

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className=" flex flex-col items-center">
      <ul className=" text-left">
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
                <div className="">
                  <div className="">
                    <div className=" text-lg font-bold">{post.title}</div>
                    <div className=" text-sm">{`#${post.category}`}</div>
                    <div>
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date(post.createdAt))}
                    </div>
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
