import { BrowserRouter } from "react-router-dom";
import RoutesContent from "../routes/Routes";

import Footer from "./Footer";
import Header from "./Header";

const LayoutDetail = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="main">
          <RoutesContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Layout = () => {
  return (
    <BrowserRouter>
      <LayoutDetail />
    </BrowserRouter>
  );
};

export default Layout;
