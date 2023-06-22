import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`).then((json) =>
      setProds(json.data.results)
    );
  }, []);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
