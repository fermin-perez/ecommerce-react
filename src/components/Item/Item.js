import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  const dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="item">
      <div className="item__title-container">
        <h3 className="item__title">{product.name}</h3>
      </div>
      <div className="item__image-container">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="item__price">
        <span>{dollarUS.format(product.price)}</span>
      </div>
      <div className="item__details-button-container">
        <div className="item__details-button">
          <Link to={`/item/${product.id}`}>Ver Detalle</Link>
        </div>
      </div>
    </div>
  );
};
