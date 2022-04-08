/** @format */

import React from "react";
import axios from "axios";
import "../styles/Register.css";

const createdAccount = () => {
	let data = JSON.stringify({
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
	});

	console.log(data);

	axios
		.post("https://satriacening.cloud.okteto.net.users", {
			headers: {
				"Content-Type": "application/json",
			},
			data: data,
		})
		.then((res) => {
			console.log(JSON.stringify(res.data));
			alert("Akun Telah Dibuat");
		})
		.catch((err) => {
			console.log(err);
			alert("Gagal Membuat Akun");
		});
};

const RegisterForm = () => {
	return (
		<>
			<div className="container bg-white form-container py-5 px-5">
				<h1 className="text-center pb-3">Create An Account</h1>
				<div className="form-floating mb-4 mt-4">
					<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" style={{ background: "none" }} />
					<label for="floatingInput">Name</label>
				</div>
				<div className="form-floating mb-4">
					<input type="email" className="form-control" id="floatingEmail" placeholder="email" style={{ background: "none" }} />
					<label for="floatingEmail">Email</label>
				</div>
				<div className="form-floating mb-4">
					<input type="password" className="form-control" id="floatingPassword" placeholder="Password" style={{ background: "none" }} />
					<label for="floatingPassword">Password</label>
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" onClick={() => createdAccount}>
						Submit
					</button>
				</div>
				<div className="d-flex flex-column text-center mt-3">
					<p>
						Already Have An Account ?
						<a href="#" className="text-decoration-none ps-1">
							Sign In
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default RegisterForm;
