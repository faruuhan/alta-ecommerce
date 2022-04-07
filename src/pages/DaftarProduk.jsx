import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "../styles/StylePlus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

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
                <div className="table-responsive">
                  <table className="table">
                    <thead style={{ background: "#EEEEEE" }}>
                      <tr>
                        <th className="py-3 px-2">Produk</th>
                        <th className="py-3">Harga</th>
                        <th className="py-3">Stock</th>
                        <th className="py-3" width={180}>
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-0">
                      <tr>
                        <td>
                          <img src={LogoPlaceholder} width={150} alt="" className="img-fluid float-lg-start me-2" />
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
                          <div className="d-flex gap-2 flex-wrap">
                            <button className="btn btn-blue" style={{ width: "50px", borderRadius: "18px" }}>
                              <BsPencilSquare size={25} />
                            </button>
                            <button className="btn btn-red" style={{ width: "50px", borderRadius: "18px" }}>
                              <BsTrash size={25} />
                            </button>
                          </div>
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
                          <div className="d-flex gap-2 flex-wrap">
                            <button className="btn btn-blue" style={{ width: "50px", borderRadius: "18px" }}>
                              <BsPencilSquare size={25} />
                            </button>
                            <button className="btn btn-red" style={{ width: "50px", borderRadius: "18px" }}>
                              <BsTrash size={25} />
                            </button>
                          </div>
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
