import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};
