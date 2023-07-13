import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  //const addToCart = (item, qty) => {
  //implementa la funcionalidad para agregar un producto al carrito
  const isInCart = (id) =>
    cartList.find((prodUn) => prodUn.id === id) ? true : false;

  const addToCart = (prodUn, counter) => {
    if (isInCart(prodUn.id)) {
      setCartList(
        cartList.map((product) => {
          return product === prodUn.id
            ? { ...prodUn, counter: prodUn.counter + counter }
            : product;
        })
      );
    } else {
      setCartList([...cartList, { prodUn, counter }]);
    }
  };
  console.log(cartList);
  const removeList = () => {
    //implementa la funcionalidad para dejar el carrito vacío
  };
  const deleteItem = (id) => {
    //implementa la funcionalidad para borrar un producto del carrito
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        removeList,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
