/** @format */

import React from "react";
import "../styles/Login.css";

const LoginForm = () => {
	return (
		<>
			<div className="container form-container">
				<h1 className="text-center text-white pb-3">Brand Name</h1>
				<div className="form-floating mb-4 mt-4">
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ background: "none" }} />
					<label for="floatingInput" className="text-white">
						Email Address
					</label>
				</div>
				<div className="form-floating mb-4">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password" style={{ background: "none" }} />
					<label for="floatingPassword" className="text-white">
						Password
					</label>
				</div>
				<div className="d-flex justify-content-center">
					<input className="btn button border-0 bg-white" type="submit" value="Login" />
				</div>
				<div className="d-flex flex-column text-end mt-3">
					<a href="#" className="text-white text-decoration-none">
						Forgot Password ?
					</a>
					<a href="#" className="text-white text-decoration-none">
						Sign Up
					</a>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
