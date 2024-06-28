import Footer from "@/app/components/Footer";
import { Suspense } from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col sm:mx-10">
        <div className="flex-1 mb-8">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
