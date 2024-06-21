import Categories from "@/app/components/Categories";
import Footer from "@/app/components/Footer";
import HomeIcon from "@/app/components/HomeIcon";
import SearchBar from "@/app/components/SearchBar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeIcon />
      <div className="flex-1 flex flex-col">
        <SearchBar />
        <div className=" text-center">
          <Categories />
        </div>
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
