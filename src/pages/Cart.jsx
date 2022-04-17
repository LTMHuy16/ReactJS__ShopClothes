import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartItemSlice } from "../redux/selector";
import { Link } from "react-router-dom";
import productData from "../assets/fake-data/products";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import numberWithCommas from "../utils/NumberWithComma";
import CartItem from "../components/CartItem";


const Cart = () => {
  const cartItems = useSelector(cartItemSlice);

  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );

    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền: </span>
              <span>{numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts?.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
