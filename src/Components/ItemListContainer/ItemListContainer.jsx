import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);

  // const { id } = useParams();
  // const { category } = useParams();

  const { id } = useParams();

  useEffect(() => {
    const collectionRef = id
      ? query(collection(db, "productos"), where("category", "==", id))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((response) => {
        const prodsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProds(prodsAdapted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // useEffect(() => {
  //   const getProds = async () => {
  //     const q = query(
  //       id
  //         ? query(collection(db, "productos"), where("category", "==", id))
  //         : collection(db, "productos")
  //     );
  //     const docs = [];
  //     const querySnapshot = await getDocs(q);

  //     querySnapshot.forEach((doc) => {
  //       docs.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(id);
  //     setProds(docs);
  //   };

  //   getProds();
  // }, []);

  return (
    <div>
      <h1>ItemListContainer</h1>
      <ItemList prods={prods} />
    </div>
  );
};

export default ItemListContainer;
