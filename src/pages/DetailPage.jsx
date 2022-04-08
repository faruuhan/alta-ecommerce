/** @format */

import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const DetailPage = () => {
	return (
		<>
			<Navbar />
			<div className="detailContainer container-fluid bg-light mt-5" style={{ height: "200vh" }}>
				<div className="container">
					<img src="" style={{ width: "100%", height: "200px" }} />
				</div>
			</div>
		</>
	);
};

export default DetailPage;
