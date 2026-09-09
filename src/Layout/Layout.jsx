// Layout.jsx
import { Outlet } from "react-router-dom";
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
