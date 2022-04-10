import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../utils/Context";

const Layout = (props) => {
  const auth = useContext(AuthContext);

  if (auth[0].status == "success") {
    alert("success login");
    return (
      <div style={{ background: "#F3F3F3", minHeight: "100vh" }}>
        <Navbar />
        {props.children}
      </div>
    );
  } else {
    // console.log(auth[0].status);
    alert("login first!");
    window.location.href = "/login";
  }
};

export default Layout;
