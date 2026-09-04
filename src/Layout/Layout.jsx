// Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../common/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <main>
        <Outlet /> {/* page content renders here */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
