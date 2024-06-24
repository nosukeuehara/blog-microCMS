import SearchArticle from "@/app/components/SearchField";
import Footer from "@/app/components/Footer";
import HomeIcon from "../components/HomeIcon";
import Categories from "../components/Categories";



const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between mb-4 border-b border-gray-300 mx-4">
        <HomeIcon />
        <SearchArticle />
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
