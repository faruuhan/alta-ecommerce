import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div style={{ background: "#F3F3F3", minHeight: "100vh" }}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;
