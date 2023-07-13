import React from "react";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
const Cart = () => {
  //accede al contexto con el hook useContext
  const { cartList, setCartList } = useContext(CartContext);

  return (
    <div>Cart</div>
    //recorre el estado global con un map y renderiza
    //nombre del producto, cantidad de items agregados, precio por item
    //importe total por producto (para lo cual necesitarás agregar una función global
    //en el contexto
  );
};

export default Cart;
