import React from "react";
import Layout from "../components/Layout";
import { BsTrash } from "react-icons/bs";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/StylePlus.css";

const Cart = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4">
          <h3 className="title-section">History Order</h3>
          <div className="col-lg-8">
            <div className="card border-0">
              <div className="card-body">
                <div className="row gap-3">
                  <div className="col-lg-3 col-md-3 col-sm-4">
                    <img src={LogoPlaceholder} width={150} alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-4 d-flex flex-column">
                    <h5>Title Produk</h5>
                    <p>Rp. 5000</p>
                    <p className="mt-auto">Sub total: Rp. 10,000</p>
                  </div>
                  <div className="col-lg-3 col-md-3 d-flex align-items-end justify-content-sm-end">
                    <button className="btn btn-transparent">
                      <BsTrash size={25} color={"#C4C4C4"} />
                    </button>
                    <input type="number" className="ms-3 form-control border-0 border-bottom" style={{ width: "80px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0">
              <div className="card-body">
                <h5>Rincian Belanja</h5>
                <p>Total Qty : 2</p>
                <p>Biaya Pengiriman: Gratis</p>
                <h5>Total Harga: Rp. 20,000</h5>
                <div className="d-flex mt-4">
                  <button className="btn btn-blue ms-auto" style={{ width: "100px" }}>
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
