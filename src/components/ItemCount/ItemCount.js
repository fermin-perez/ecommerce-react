import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__stock">
        <span>Stock disponible: {stock}</span>
      </div>
      <div className="item-count__controlls">
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="item-count__add">
        <button
          className={
            stock === 0 ? "item-count__add-disabled" : "item-count__add-enabled"
          }
          onClick={() => {
            onAdd(count);
          }}
          disabled={stock === 0 ? true : false}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
