import React from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/StylePlus.css";

const Checkout = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4 justify-content-center">
          <div className="col-lg-10">
            <h3 className="title-section">Keranjang</h3>
            <div className="card border-0">
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="mb-4">
                      <label htmlFor="Alamat" className="formLabel mb-3">
                        Alamat
                      </label>
                      <input type="text" className="form-control mb-2" id="namaJalan" placeholder="Nama Jalan" />
                      <input type="text" className="form-control mb-2" id="kota" placeholder="Kota" />
                      <input type="text" className="form-control mb-2" id="provinsi" placeholder="Provinsi" />
                      <input type="text" className="form-control" id="kodePos" placeholder="Kode Pos" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="Pembayaran" className="formLabel mb-3">
                        Pembayaran
                      </label>
                      <select className="form-select mb-2" aria-label="Default select example">
                        <option defaultValue="selected">Metode Pembayaran</option>
                        <option value="1">Transfer Bank</option>
                        <option value="2">Virtual Account</option>
                      </select>
                      <select className="form-select" aria-label="Default select example">
                        <option defaultValue="selected">Bank Tujuan</option>
                        <option value="1">BCA</option>
                        <option value="2">Mandiri</option>
                      </select>
                    </div>
                    <h5>Rincian Belanja</h5>
                    <p>Total Qty : 2</p>
                    <p>Biaya Pengiriman: Gratis</p>
                    <h5>Total Harga: Rp. 20,000</h5>
                    <div className="d-flex mt-4">
                      <button className="btn btn-blue ms-auto" style={{ width: "100px" }}>
                        Bayar
                      </button>
                    </div>
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

export default Checkout;
