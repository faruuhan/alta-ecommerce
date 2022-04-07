import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./routes/Routes";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <TambahProduk />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
