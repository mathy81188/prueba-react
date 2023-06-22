import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

const CategoryPage = () => {
  const [prodCat, setProdCat] = useState({});

  let { categoryId } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${categoryId}`).then(
      (json) => setProdCat(json.data)
    );
  }, [categoryId]);

  let filteredProd = prodCat.filter((item) => {
    return item.status === categoryId;
  });

  return (
    <div>
      category page
      {filteredProd.map((prod) => {
        return (
          <div className="Card-Prod" key={prod.id}>
            <Link to={`category/${prod.categoryId}`}>
              <ItemListContainer prod={prod} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
