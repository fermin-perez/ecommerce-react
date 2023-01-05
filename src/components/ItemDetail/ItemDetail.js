import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react";

export const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    addItem(product, quantity);
  };

  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="item-detail">
      <div className="item-detail__picture">
        <div className="item-detail__picture-container">
          <img src={product.img} alt={product.name} />
        </div>
      </div>
      <div className="item-detail__info">
        <div className="item-detail__info-container">
          <h3 className="item-detail__title">{product.name}</h3>
          <p className="item-detail__description">{product.description}</p>
          <div className="item-detail__price">
            <span>{dollarUS.format(product.price)}</span>
          </div>
          <div className="item-detail__counter">
            {quantity > 0 ? (
              <Link to={"/cart"}>Ir al carrito</Link>
            ) : (
              <ItemCount
                stock={product.stock}
                initial={getProductQuantity(product.id)}
                onAdd={handleOnAdd}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
