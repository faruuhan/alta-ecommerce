/** @format */

import React from "react";
import "../styles/HomePage.css";
import ProductCard from "./ProductCard";

const Home = () => {
	return (
		<>
			<div className="productNavigation container bg white d-flex justify-content-around">
				<a href="#">Gadget</a>
				<a href="#">Laptop</a>
				<a href="#">Fashion</a>
				<a href="#">Tagihan</a>
				<a href="#">Elektronik</a>
			</div>
		</>
	);
};

export default Home;
