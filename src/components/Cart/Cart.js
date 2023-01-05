import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { CartItem } from "../CartItem/CartItem";
import { MessageCard } from "../MessageCard/MessageCard";
import sadFace from "../../assets/img/sad-face.png";

export const Cart = () => {
  const cartContext = useContext(CartContext);

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className="cart">
      <h1 className="cart__title">Carrito de compras</h1>
      {cartContext.getCartQuantity() > 0 ? (
        <div className="cart-container">
          <div className="cart__header">
            <span className="cart__header__image">Imagen</span>
            <span className="cart__header__title">Producto</span>
            <span className="cart__header__units">Cantidad</span>
            <span className="cart__header__price">Precio Unitario</span>
            <span className="cart__header__total">Subtotal</span>
            <span className="cart__header__remove">Eliminar</span>
          </div>
          {cartContext.cart.map((product) => (
            <CartItem item={product} key={product.id} />
          ))}
          <div className="cart__footer">
            <div className="cart__clean">
              <button
                onClick={() => cartContext.clear()}
                className="cart__button"
              >
                Limpiar carrito
              </button>
            </div>
            <div className="cart__total">
              <span>{`Total: ${dollarUS.format(
                cartContext.getTotalPrice()
              )}`}</span>
            </div>
            <div className="cart__finish">
              <Link to={"/checkout"}>
                <button className="cart__button">Terminar compra</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <MessageCard
          icon={sadFace}
          title="Tu carrito está vacío"
          message="Te invitamos a que conozcas nuestros productos."
        />
      )}
    </section>
  );
};
