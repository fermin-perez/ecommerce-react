import "./CartWidget.css";
import cart from "../../assets/img/cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="navbar__cart">
      <Link to={"/cart"}>
        <div className="navbar__cart-container">
          <img src={cart} alt="Carrito de compras"></img>
          {cartContext.getCartQuantity() > 0 ? (
            <div className="navbar__cart-quantity">
              {cartContext.getCartQuantity()}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};
