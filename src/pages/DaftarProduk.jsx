import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const DaftarProduk = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-lg-3">
            <SideNav />
          </div>
          <div className="col-lg-9">
            <h3 className="title-section">Daftar Produk</h3>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="sub-title-section py-3">Informasi Produk</h5>
                <div class="table-responsive">
                  <table class="table">
                    <thead style={{ background: "#EEEEEE" }}>
                      <tr>
                        <th className="py-3 px-2">Produk</th>
                        <th className="py-3">Harga</th>
                        <th className="py-3">Stock</th>
                        <th className="py-3">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="border-0">
                      <tr>
                        <td>
                          <img src={LogoPlaceholder} width={150} alt="" className="float-lg-start me-2" />
                          <h5>Title Produk</h5>
                          <p className="fst-italic">Kategori</p>
                        </td>
                        <td>
                          <p>Rp. 5000</p>
                        </td>
                        <td>
                          <p>18</p>
                        </td>
                        <td>
                          <p>Edit | Delete</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={LogoPlaceholder} width={150} alt="" className="float-lg-start me-2" />
                          <h5>Title Produk</h5>
                          <p className="fst-italic">Kategori</p>
                        </td>
                        <td>
                          <p>Rp. 5000</p>
                        </td>
                        <td>
                          <p>18</p>
                        </td>
                        <td>
                          <p>Edit | Delete</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DaftarProduk;
