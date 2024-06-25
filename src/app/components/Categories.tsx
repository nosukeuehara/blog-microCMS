import { Category, fetchCategories } from "@/libs/microcms";
import Link from "next/link";

const Categories = async ({ categoryId }: { categoryId?: string }) => {
  const { contents } = await fetchCategories();
  const categories: Category[] = contents;

  if (!categories || categories.length === 0) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">No categories</h1>
    );
  }
  return (

    <div className=" flex flex-col items-center">
      <ul className=" flex justify-between">
        {categories.map((category) => (
          <li key={category.id} className="mb-2">
            <Link
              href={`/home/category/${category.id}`}
              className={`${categoryId === category.id
                  ? " font-bold text-slate-500 hover:text-slate-600 m-3"
                  : ""
                }text-slate-500 hover:text-slate-600 m-3`}
            >
              {`#${category.name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
