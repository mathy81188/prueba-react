import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/NavBar/navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartContext from "./Components/CartContext/CartContext";

const App = () => {
  const [user, setUser] = useState(null);
  const cambiar = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "luis",
      });
    }
  };
  return (
    <CartContext.Provider value={user}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContext />} />
          </Routes>
        </Router>
      </div>
    </CartContext.Provider>
  );
};

export default App;
