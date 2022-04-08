/** @format */
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import ProductCard from "../components/ProductCard";
import ProductLoading from "../components/ProductLoading";

const HomePage = () => {
	const skeleton = useState([1, 2, 3, 4, 5, 6]);
	const [product, setProduct] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		axios
			.get("https://virtserver.swaggerhub.com/husnulnawafil27/ecommerce_app/1.0.0/products")
			.then((res) => {
				const { result } = res.data;
				document.title = "E-Commerce";
				const temp = [...product];
				product.push(...result);
				setProduct(temp);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Navbar />
			<div className="container-fluid bg-light">
				<div className="container bg-white pt-3 pb-3">
					<Home />
				</div>
				<div className="container bg-white h-50 mt-5 d-flex justify-content-around">
					{loading
						? skeleton.map((item) => {
								return <ProductLoading key={item} />;
						  })
						: product.map((item) => {
								return <ProductCard key={item.id} item={item} navigate={`/detail/${item.id}`} />;
						  })}
				</div>
			</div>
		</>
	);
};

export default HomePage;
