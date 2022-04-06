import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const TambahProduk = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-3">
            <SideNav />
          </div>
          <div className="col-lg-9"></div>
        </div>
      </div>
    </Layout>
  );
};

export default TambahProduk;
