import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/NavBar/navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
//import CartContext from "./Components/CartContext/CartContext";

const App = () => {
  return (
    <div className="App">
      {/* <CartContext.Provider> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element={<CartContext/>}/> */}
        </Routes>
      </Router>
      {/* </CartContext.Provider> */}
    </div>
  );
};

export default App;
