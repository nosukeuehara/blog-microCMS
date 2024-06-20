import Footer from "@/app/components/footer";
import Navigation from "@/app/components/navigation";
import Sidebar from "@/app/components/Sidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <div className="">
        <div className="">
          <Sidebar />
        </div>
        <div className="">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </div >
  );
};

export default Layout;
