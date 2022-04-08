/** @format */

import React from "react";
import { BsPersonCircle, BsCart2 } from "react-icons/bs";
import ProfilePage from "../pages/ProfilePage";
import "../styles/Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg py-4 navbar-dark bg-blue">
			<div className="container">
				<a className="navbar-brand" href="#">
					LOGO
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto gap-5 align-items-lg-center">
						<div className="navItem">
							<a href="" className="navLink">
								<BsCart2 size={25} />
							</a>
						</div>
						<div className="navItem d-flex align-items-center gap-3">
							<BsPersonCircle color="#FFFFFF" size={25} />
							<a className="navLink" href="/ProfilePage">
								User Account
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
