import React, { useContext } from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (auth) {
    return (
      <div style={{ background: "#F3F3F3", minHeight: "100vh" }}>
        <Navbar />
        {props.children}
      </div>
    );
  } else {
    alert("login first!");
    window.location.href = "/login";
  }
};

export default Layout;
