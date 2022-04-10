import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import axios from "axios";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "../styles/StylePlus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const DaftarProduk = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    fetchData();
    document.title = "Daftar Product";
  }, []);

  const fetchData = () => {
    let config = {
      method: "get",
      url: "http://8.219.11.61:8000/products/",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDk2ODYwMzAsImlkIjozLCJuYW1lIjoiZmFyaGFuIn0.FoAvADDQWKVQQXON4OSzmFCr7iiM-173H0yiaBj1BXU",
      },
    };

    axios(config)
      .then(function (response) {
        setDataProduct(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteProduct = (product) => {
    let config = {
      method: "delete",
      url: `http://8.219.11.61:8000/products/${product.ID}`,
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2NDk2ODYwMzAsImlkIjozLCJuYW1lIjoiZmFyaGFuIn0.FoAvADDQWKVQQXON4OSzmFCr7iiM-173H0yiaBj1BXU",
      },
    };

    axios(config)
      .then(function (response) {
        window.location.href = "/DataProduct";
      })
      .catch(function (error) {
        console.log(error);
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
                      {dataProduct.map((product) => {
                        return (
                          <tr key={product.ID}>
                            <td>
                              <img src={LogoPlaceholder} width={150} alt="" className="img-fluid float-lg-start me-2" />
                              <h5>{product.name}</h5>
                              <p className="fst-italic">{product.category}</p>
                            </td>
                            <td>
                              <p>{product.price}</p>
                            </td>
                            <td>
                              <p>{product.qty}</p>
                            </td>
                            <td>
                              <div className="d-flex gap-2 flex-wrap">
                                <a href={`/UpdateProduk/${product.ID}`} className="btn btn-blue" style={{ width: "50px", borderRadius: "18px" }}>
                                  <BsPencilSquare size={25} />
                                </a>
                                <button className="btn btn-red" style={{ width: "50px", borderRadius: "18px" }} onClick={() => deleteProduct(product)}>
                                  <BsTrash size={25} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
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
