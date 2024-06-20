import Navigation from "@/app/components/Navigation";
import Sidebar from "../../components/Sidebar";
import Footer from "@/app/components/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <div className="">
        <div className="">
          <main>{children}</main>
        </div>
        <div className="">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
