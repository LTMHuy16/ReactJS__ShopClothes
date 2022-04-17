import { BrowserRouter } from "react-router-dom";
import RoutesContent from "../routes/Routes";

import Footer from "./Footer";
import Header from "./Header";
import ProductViewModal from './ProductViewModal'

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
      <ProductViewModal />
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
