import Footer from "../components/footer";
import Navigation from "../components/navigation";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-4">
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
