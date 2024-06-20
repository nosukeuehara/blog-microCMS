import { Category } from "@/libs/microcms";

const Sidebar = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/category`
  );
  const data = await response.json();
  const categories: Category[] = data.contents;

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
            <a href="#" className="text-slate-500 hover:text-slate-700 m-10">
              {`#${category.name}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
