// Layout.tsx

import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto max-w-5xl px-4">
      <Navigation />
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <main>{children}</main>
        </div>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
