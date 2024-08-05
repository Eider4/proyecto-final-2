import { Children, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvaider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("Carrito")) || [];
    setCart(array);
  }, []);

  const addtoCart = (product) => {
    const array = JSON.parse(localStorage.getItem("Carrito")) || [];
    const productos = [product, ...array];
    localStorage.setItem("Carrito", JSON.stringify(productos));
    setCart(productos);
  };
  const removetoCart = (product) => {
    setCart(cart.filter((item) => item.id != product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addtoCart, removetoCart }}>
      {children}
    </CartContext.Provider>
  );
};
