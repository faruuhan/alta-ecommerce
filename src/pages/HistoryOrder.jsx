import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import axios from "axios";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const HistoryOrder = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`https://8.219.11.61:8000/order/`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDk2ODYwMzAsImlkIjozLCJuYW1lIjoiZmFyaGFuIn0.FoAvADDQWKVQQXON4OSzmFCr7iiM-173H0yiaBj1BXU",
        },
      })
      .then((ress) => {
        console.log(ress);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-lg-3">
            <SideNav />
          </div>
          <div className="col-lg-9">
            <h3 className="title-section">History Order</h3>
            <div className="card border-0">
              <div className="card-body">
                <div className="row flex-md-wrap gap-2">
                  <div className="d-flex gap-3">
                    6 April 2022 <span className="text-success">Berhasil</span> INV/20220215/MPL/2049077825
                  </div>
                  <div className="col-lg-2 col-md-3 col-sm-12">
                    <img src={LogoPlaceholder} width={150} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-md-4 col-sm">
                    <h5>Title Produk</h5>
                    <p className="fst-italic">Kategori</p>
                    <p>Qty 2 x Rp.5000</p>
                    <p className="text-muted">+1 Barang Lainnya</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm">
                    <p>Harga Total</p>
                    <h5>Rp. 10,000</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoryOrder;
