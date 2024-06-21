import { Category, getList } from "@/libs/microcms";

const Categories = async () => {
  const { contents } = await getList<Category>("categories");
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
            <a href="#" className="text-slate-500 hover:text-slate-700 m-3">
              {`#${category.name}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
