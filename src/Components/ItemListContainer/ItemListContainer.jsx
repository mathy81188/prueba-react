import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);

  const { id } = useParams();
  const { category } = useParams();

  useEffect(() => {
    const getProds = async () => {
      const q = query(
        category ? where("category", "==", id) : collection(db, "productos")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(id);
      setProds(docs);
    };

    getProds();
  }, []);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
