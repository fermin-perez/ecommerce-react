import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { ...item, quantity: quantity }]);
    } else {
      setCart(
        cart.map((product) =>
          product.id === item.id ? { ...product, quantity: quantity } : product
        )
      );
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((product) => product.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const getCartQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const getProductQuantity = (itemId) => {
    const product = cart.find((product) => product.id === itemId);
    return product ? product.quantity : 1;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        getCartQuantity,
        getProductQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
