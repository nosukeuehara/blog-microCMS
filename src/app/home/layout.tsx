import HomeIcon from "../components/HomeIcon";
import Header from "../components/Header";
import SearchArticles from "@/app/components/SearchArticles";
import Footer from "../Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <HomeIcon />
        <SearchArticles />
      </Header>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 mb-8">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
