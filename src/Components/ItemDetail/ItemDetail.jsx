//ItemDetail.js, que debe mostrar la vista de detalle de un ítem incluyendo su descripción, una foto y el precio
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

const ItemDetail = () => {
  const [prod, setProd] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setProd(json.data)
    );
  }, [id]);

  return (
    <div className="Card-Prod">
      <h1>Item Detail</h1>
      <Item prod={prod} />
    </div>
  );
};

export default ItemDetail;
