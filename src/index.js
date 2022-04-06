import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import TambahProduk from "./pages/TambahProduk";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <TambahProduk />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <TambahProduk />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
