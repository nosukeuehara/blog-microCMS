import SearchArticle from "@/app/components/SearchField";
import Categories from "@/app/components/Categories";
import Footer from "@/app/components/Footer";
import HomeIcon from "@/app/components/HomeIcon";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { categoryId: string };
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between mb-4 border-b border-gray-300 mx-4">
        <HomeIcon />
        <SearchArticle />
      </div>
      <div className="text-center mb-4">
        <Categories categoryId={params.categoryId} />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 mb-8">
          <main>{children}</main>
        </div>
      </div>
      <div className="mt-auto bg-white w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
