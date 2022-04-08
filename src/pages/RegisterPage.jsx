/** @format */

import React from "react";
import RegisterForm from "../components/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/Login.css";

const Register = () => {
	return (
		<div className="container-fluid bg-blue">
			<div className="vertical-center">
				<RegisterForm />
			</div>
		</div>
	);
};

export default Register;
