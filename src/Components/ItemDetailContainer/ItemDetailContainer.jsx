import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
//import { collection, query, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [prodUn, setProdUn] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const docRef = async () => {
      const ref = doc(db, "productos", id);
      const docSnap = await getDoc(ref);

      if (docSnap.exists()) {
        setProdUn(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    docRef();
  }, [id]);

  return (
    <div>
      <h1>ItemDetailContainer</h1>
      <ItemDetail prodUn={prodUn} />
    </div>
  );
};

export default ItemDetailContainer;
