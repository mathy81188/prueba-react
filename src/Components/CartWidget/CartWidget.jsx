import React, { useContext } from "react";
import "./CartWidget.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../CartContext/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CartWidget = () => {
  // const [addToCart] = useContext(CartContext);
  //accede al contexto con el hook useContext
  //const ctx = useContext(CartContext);

  return (
    //calcItemsQty() es una función global del contexto que retorna la cantidad de items en el carrito badgeContent={ctx.calcItemsQty()}

    <div className="CartWidget">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={[]} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
};

export default CartWidget;
