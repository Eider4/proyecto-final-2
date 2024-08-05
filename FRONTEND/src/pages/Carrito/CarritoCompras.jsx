import React, { useContext } from "react";
import { CartContext } from "../../context/Cart/CartContext";
import CarProducos from "../../components/CardProductos";

export default function CarritoCompras() {
  const {cart } = useContext(CartContext)
  console.log(cart);

  return (
    <div>
      {cart.map((e, i) => (
        <div key={i}>
          <CarProducos {...e}>
            <h1></h1>
          </CarProducos>
        </div>
      ))}
    </div>
  );
}
