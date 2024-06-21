import Categories from "@/app/components/categories";
import Footer from "@/app/components/footer";
import HomeIcon from "@/app/components/homeIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeIcon />
      <div className="flex-1 flex flex-col">
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
