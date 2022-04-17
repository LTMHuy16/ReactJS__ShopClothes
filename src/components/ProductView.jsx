import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import numberWithCommas from "../utils/NumberWithComma";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/shopping-cart/cartItemSlice";

const ProductView = ({ product }) => {
  const dispatch = useDispatch();

  if (product === undefined) {
    product = {
      title: "",
      price: "",
      colors: [],
      size: [],
    };
  }

  const navigate = useNavigate();

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [isExpandDes, setIsExpandDes] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quality, setQuality] = useState(1);

  const updateQuality = (type) => {
    if (type === "plus") {
      setQuality((preQuality) => preQuality + 1);
    } else {
      setQuality(quality - 1 < 1 ? 1 : quality - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
    setQuality(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu mong muốn !!!");
      return false;
    }

    if (size === undefined) {
      alert("Vui lòng chọn kích cỡ mong muốn !!!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quality,
          price: product.price,
        })
      );
    }
    alert('Add Product Success !!!')
  };

  const goToCart = () => {
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quality,
          price: product.price,
        })
      );
      navigate("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div className="product__images__list__item">
            <img
              src={product.image01}
              alt="img-01"
              onClick={() => setPreviewImg(product.image01)}
            />
          </div>
          <div className="product__images__list__item">
            <img
              src={product.image02}
              alt="img-01"
              onClick={() => setPreviewImg(product.image02)}
            />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product__description ${isExpandDes ? "expand" : ""}`}>
          <h4 className="product__description__title">Chi tiết sản phẩm</h4>
          <p
            className="product__description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
          <div className="product__description__toggle">
            <Button size="sm" onclick={() => setIsExpandDes(!isExpandDes)}>
              {isExpandDes ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <h4 className="product__info__item__title">Màu sắc</h4>
          <ul className="product__info__item__list">
            {product.colors.map((item, index) => (
              <li
                key={`color__${index}`}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="product__info__item">
          <h4 className="product__info__item__title">Kích thước</h4>
          <ul className="product__info__item__list">
            {product.size.map((item, index) => (
              <li
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="product__info__item">
          <h4 className="product__info__item__title">Số lượng</h4>
          <div className="product__info__item__quality">
            <div
              className="product__info__item__quality__btn"
              onClick={() => updateQuality("minus")}
            >
              <box-icon name="minus"></box-icon>
            </div>
            <div className="product__info__item__quality__input">{quality}</div>
            <div
              className="product__info__item__quality__btn"
              onClick={() => updateQuality("plus")}
            >
              <box-icon name="plus"></box-icon>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__btns">
            <Button size="sm" onclick={() => addToCart()}>
              Thêm vào giỏ
            </Button>
            <Button size="sm" onclick={() => goToCart()}>
              Mua ngay
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`product__description mobile ${isExpandDes ? "expand" : ""}`}
      >
        <h4 className="product__description__title">Chi tiết sản phẩm</h4>
        <p
          className="product__description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        <div className="product__description__toggle">
          <Button size="sm" onclick={() => setIsExpandDes(!isExpandDes)}>
            {isExpandDes ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
