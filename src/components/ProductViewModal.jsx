import productData from "../assets/fake-data/products";
import Button from "./Button";
import ProductView from "./ProductView";
import { useSelector, useDispatch } from "react-redux";

import { removeProduct } from "../redux/product-modal/productModalSlice";
import { productSlugSelector } from "../redux/selector";
import { useEffect, useState } from "react";

const ProductViewModal = () => {
  const productSlug = useSelector(productSlugSelector);
  const dispatch = useDispatch();

  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);


  return (
    <div
      className={`productView__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="productView__modal__content">
        <ProductView product={product} />
        <div className="productView__modal__content__close">
          <Button size="sm" onclick={() => dispatch(removeProduct())}>
            Đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
