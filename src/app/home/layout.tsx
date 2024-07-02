import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeIcon from "../components/HomeIcon";
import { Suspense } from "react";
import Loading from "../components/Loading";
import ArticleFinder from "../components/ArticleFinder";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header>
        <HomeIcon />
        <ArticleFinder />
      </Header>
      <div className="flex-1 flex flex-col sm:mx-10">
        <div className="flex-1 mb-8">
          {/* Suspenseバウンダリーを使用することでusePathname()を使ってる子要素のレンダリングのみをクライアントサイドレンダリングに変更できる*/}
          <Suspense fallback={<Loading />}>
            <main>{children}</main>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
