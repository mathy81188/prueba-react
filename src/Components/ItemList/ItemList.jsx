//Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../ItemList/ItemList.css";

import Item from "../Item/Item";

const ItemList = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`).then((json) =>
      setProds(json.data.results)
    );
  }, []);

  return (
    <div className="Card-List">
      {prods.map((prod) => {
        return (
          <div className="Card-Prod" key={prod.id}>
            <Link to={`item/${prod.id}`}>
              <Item prod={prod} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
