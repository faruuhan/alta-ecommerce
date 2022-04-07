import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TambahProduk from "../pages/TambahProduk";
import DaftarProduk from "../pages/DaftarProduk";
import HistoryOrder from "../pages/HistoryOrder";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TambahProduk />} />
        <Route path="/DaftarProduk" element={<DaftarProduk />} />
        <Route path="/HistoryOrder" element={<HistoryOrder />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
