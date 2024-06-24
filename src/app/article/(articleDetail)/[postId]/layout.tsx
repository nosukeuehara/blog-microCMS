import SearchArticle from "@/app/components/SearchField";
import Categories from "@/app/components/Categories";
import Footer from "@/app/components/Footer";
import HomeIcon from "@/app/components/HomeIcon";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between mb-4 border-b border-gray-300 mx-4">
        <HomeIcon />
        <SearchArticle />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
