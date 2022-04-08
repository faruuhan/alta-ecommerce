/** @format */

import React from "react";
import LoginForm from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/Login.css";

const Login = () => {
	return (
		<div className="container-fluid bg-blue">
			<div className="container vertical-center">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
