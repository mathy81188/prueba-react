import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

const ItemDetail = ({ prodUn }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const { addToCart } = useContext(CartContext);
  const [counter, setCounter] = useState(0);

  const counterUp = () => {
    setCounter(counter + 1);
  };
  const counterDown = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const handleAdd = (e) => {
    console.log({ ...prodUn, counter });
    addToCart({ prodUn, counter });
    // const isInCart = (id) => {
    //   item.find((items) => item.id === id)
    //     ? true
    //     : false;
    // };
    e.preventDefault();
  };

  return (
    <div className="Card-Prod">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" image={prodUn.img} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prodUn.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`$${prodUn.price}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prodUn.origin}
            </Typography>
            <ItemCount
              prodUn={prodUn}
              counter={counter}
              counterUp={counterUp}
              counterDown={counterDown}
              handleAdd={handleAdd}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemDetail;
