import { fetchCategories } from "@/libs/microcms";

const Sidebar = async () => {
  const { contents } = await fetchCategories();

  if (!contents || contents.length === 0) {
    return (
      <h1 className="text-center text-xl font-semibold mt-8">No categories</h1>
    );
  }
  return (
    <div className=" p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {contents.map((category) => (
          <li key={category.id} className="mb-2">
            <a href="#" className="text-blue-600 hover:underline">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
