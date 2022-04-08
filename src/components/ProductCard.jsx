/** @format */

import React from "react";
import axios from "axios";
import { BsCart } from "react-icons/bs";

fetch("https://virtserver.swaggerhub.com/husnulnawafil27/ecommerce_app/1.0.0/products").then((res) => {
	console.log(res);
});

const ProductCard = () => {
	return (
		<div class="card" style={{ width: "18rem" }}>
			<img src="..." class="card-img-top" alt="..." />
			<div class="card-body">
				<p class="card-text">Product Title</p>
				<button type="button" className="btn btn-primary">
					<BsCart size={20} />
					<span className="ps-3">Masukkan Keranjang</span>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
