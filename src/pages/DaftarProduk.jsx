import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import axios from "axios";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import "../styles/StylePlus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const DaftarProduk = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [userId, setUserId] = useState("");
  const [userToken, setUserToken] = useState("");
  const [readyPage, setReadyPage] = useState("false");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    setUserId(auth[0].data.id);
    setUserToken(auth[0].data.token);
    axios
      .get(`http://8.219.11.61:8000/products/`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setDataProduct(response.data.data);
        setReadyPage(true);
      })
      .catch((error) => {
        console.log(error);
      });
    document.title = "Daftar Produk";
  };

  const deleteProduct = (product) => {
    axios
      .delete(`http://8.219.11.61:8000/products/${product.ID}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        alert("Produk akan dihapus");
        window.location.href = "/DaftarProduk";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const filterDataProduct = dataProduct.filter((products) => products.seller_id == userId);

  if (readyPage) {
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
                        {filterDataProduct.map((product) => {
                          return (
                            <tr key={product.ID}>
                              <td>
                                <img src={product.image} width={150} alt="" className="img-fluid float-lg-start me-2" />
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
  }
};

export default DaftarProduk;
