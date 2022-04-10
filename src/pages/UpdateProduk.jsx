import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/StylePlus.css";

const UpdateProduk = () => {
  const params = useParams();
  const namaProduk = useRef();
  const deskripsiProduk = useRef();
  const kategori = useRef();
  const harga = useRef();
  const stokProduk = useRef();
  const gambarProduk = useRef();
  const [dataProduct, setDataProduct] = useState({});
  const [userToken, setUserToken] = useState("");
  const [readyPage, setReadyPage] = useState("false");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const { id } = params;
    const auth = JSON.parse(localStorage.getItem("auth"));
    setUserToken(auth[0].data.token);
    setReadyPage(true);

    axios
      .get(`http://8.219.11.61:8000/products/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(function (response) {
        setDataProduct(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    document.title = "Update Produk";
  };

  const updateProduct = () => {
    const { id } = params;
    const data = {
      name: namaProduk.current.value,
      category: kategori.current.value,
      price: parseInt(harga.current.value),
      qty: parseInt(stokProduk.current.value),
      description: deskripsiProduk.current.value,
      image: gambarProduk.current.value,
    };

    axios
      .put(`http://8.219.11.61:8000/products/${id}`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((ress) => {
        console.log(ress.data);
        alert("Produk telah diperbaharui");
        window.location.href = "/DaftarProduk";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (readyPage) {
    return (
      <Layout>
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-lg-3">
              <SideNav />
            </div>
            <div className="col-lg-9">
              <h3 className="title-section mb-4">Update Produk</h3>
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="sub-title-section py-3">Informasi Produk</h5>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="namaProduk" className="formLabel">
                        Nama Produk
                      </label>
                      <p className="subFormLabel">Cantumkan min. 40 karakter agar semakin menarik dan mudah ditemukan oleh pembeli, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.</p>
                    </div>
                    <div className="col-lg">
                      <input type="text" className="form-control" id="namaProduk" ref={namaProduk} placeholder="Contoh: Laptop Ryzen 5 5400u" defaultValue={dataProduct.name || ""} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="kategori" className="formLabel">
                        Kategori
                      </label>
                    </div>
                    <div className="col-lg">
                      <select className="form-select" aria-label="Default select example" id="kategori" ref={kategori}>
                        <option defaultValue="selected">Pilih Kategori</option>
                        <option>Elektronik</option>
                        <option>Pakaian</option>
                        <option>Alat Rumah Tangga</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="harga" className="formLabel">
                        Harga
                      </label>
                    </div>
                    <div className="col-lg">
                      <input type="text" className="form-control" id="harga" ref={harga} placeholder="Masukan Harga" defaultValue={dataProduct.price} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="stokProduk" className="formLabel">
                        Stok Produk
                      </label>
                    </div>
                    <div className="col-lg">
                      <input type="number" className="form-control" id="stokProduk" ref={stokProduk} placeholder="Masukan Stok Produk" defaultValue={dataProduct.qty} />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="deskripsiProduk" className="formLabel">
                        Deskripsi Produk
                      </label>
                      <p className="subFormLabel">
                        Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Semakin detail, semakin berguna bagi pembeli, cantumkan min. 260 karakter agar pembeli semakin mudah mengerti dan menemukan
                        produk anda
                      </p>
                    </div>
                    <div className="col-lg">
                      <textarea ref={deskripsiProduk} id="deskripsiProduk" cols="30" rows="10" className="form-control">
                        {dataProduct.description}
                      </textarea>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-lg-3">
                      <label htmlFor="gambarProduk" className="formLabel">
                        Gambar Produk
                      </label>
                    </div>
                    <div className="col-lg">
                      <input type="text" className="form-control" id="gambarProduk" ref={gambarProduk} defaultValue={dataProduct.image}></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 ms-auto">
                      <button type="submit" className="btn btn-blue" style={{ width: "180px" }} onClick={() => updateProduct()}>
                        Simpan Produk
                      </button>
                    </div>
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

export default UpdateProduk;
