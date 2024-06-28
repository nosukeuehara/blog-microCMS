import Header from "../components/Header";
import SearchArticles from "@/app/components/SearchArticles";
import Footer from "../components/Footer";
import HomeIcon from "../components/HomeIcon";
import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <HomeIcon />
        <SearchArticles />
      </Header>
      <div className="flex-1 flex flex-col sm:mx-10">
        <div className="flex-1 mb-8">
          <Suspense>
            <main>{children}</main>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
