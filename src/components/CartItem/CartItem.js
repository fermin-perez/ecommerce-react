import "./CartItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import remove from "../../assets/img/remove.png";

export const CartItem = ({ item }) => {
  const cartContext = useContext(CartContext);

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="item-cart">
      <div className="item-cart__image-container">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="item-cart__title">
        <Link to={`/item/${item.id}`}>{item.name}</Link>
      </div>
      <div className="item-cart__units item-cart__units--responsive">
        <span className="item-cart__property">Cantidad</span>
        <span>{item.quantity}</span>
      </div>
      <div className="item-cart__price item-cart__price--responsive">
        <span className="item-cart__property">Precio Unitario</span>
        <span>{dollarUS.format(item.price)}</span>
      </div>
      <div className="item-cart__total item-cart__total--responsive">
        <span className="item-cart__property">Subtotal</span>
        <span>{dollarUS.format(item.price * item.quantity)}</span>
      </div>
      <div className="item-cart__remove-item">
        <button onClick={() => cartContext.removeItem(item.id)}>
          <img src={remove} alt="Eliminar producto" />
        </button>
      </div>
    </div>
  );
};
