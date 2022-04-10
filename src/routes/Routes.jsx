import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../utils/Context";
import TambahProduk from "../pages/TambahProduk";
import DaftarProduk from "../pages/DaftarProduk";
import HistoryOrder from "../pages/HistoryOrder";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import UpdateProduk from "../pages/UpdateProduk";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const author = JSON.parse(localStorage.getItem("auth"));
    if (author) {
      setAuth(author);
    }
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TambahProduk />} />
          <Route path="/DaftarProduk" element={<DaftarProduk />} />
          <Route path="/UpdateProduk/:id" element={<UpdateProduk />} />
          <Route path="/HistoryOrder" element={<HistoryOrder />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
