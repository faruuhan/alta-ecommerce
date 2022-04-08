/** @format */

import React from "react";
import { createRoot } from "react-dom/client";
import Application from "./routes/Routes";
import "./styles/index.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Application />
	</React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <TambahProduk />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
