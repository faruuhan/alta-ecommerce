import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Register = () => {
  const createAccount = () => {
    axios
      .post("http://8.219.11.61:8000/users", {
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        },
      })
      .then((ress) => {
        console.log(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", background: "#66A6FF" }}>
      <div className="container my-auto">
        <div className="row justify-content-lg-end">
          <div className="col-lg-6">
            <div className="card border-0">
              <div className="card-body">
                <h3 className="text-center mb-5">Create Your Account</h3>
                <div className="mb-5">
                  <input type="text" className="form-control" id="name" placeholder="Full Name" />
                </div>
                <div className="mb-5">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-5">
                  <input type="password" className="form-control" id="password" placeholder="Your Password" />
                </div>
                <button className="btn btn-blue" style={{ width: "100%" }} onClick={() => createAccount()}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
