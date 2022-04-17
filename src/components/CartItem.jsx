import PropTypes from "prop-types";
import numberWithCommas from "../utils/NumberWithComma";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const updateQuantity = (opt) => {
    if (opt === "+") {
      // setQuantity(quantity + 1);
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    }
    if (opt === "-" && quantity > 1) {
      dispatch(updateItem({ ...item, quantity: quantity - 1 }));
    }
  };

  const removeCart = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart__item">
      <div className="cart__item__img">
        <img src={item.product.image01} alt={item.slug} />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(Number(item.product.price))}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quality">
            <div
              className="product__info__item__quality__btn"
              onClick={() => updateQuantity("-")}
            >
              <box-icon name="minus"></box-icon>
            </div>
            <div className="product__info__item__quality__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quality__btn"
              onClick={() => updateQuantity("+")}
            >
              <box-icon name="plus"></box-icon>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del" onClick={() => removeCart()}>
          <box-icon name="trash"></box-icon>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
