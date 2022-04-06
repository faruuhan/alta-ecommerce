import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/TambahProduk.css";

const TambahProduk = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-lg-3">
            <SideNav />
          </div>
          <div className="col-lg-9">
            <h3 className="title-section">Tambah Produk</h3>
            <div className="card border-0">
              <div className="card-header border-0 bg-light">
                <h5 className="sub-title-section pt-3">Informasi Produk</h5>
              </div>
              <div className="card-body">
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="namaProduk" className="formLabel">
                      Nama Produk
                    </label>
                    <p className="subFormLabel">Cantumkan min. 40 karakter agar semakin menarik dan mudah ditemukan oleh pembeli, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.</p>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" id="namaProduk" placeholder="Contoh: Laptop Ryzen 5 5400u" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="kategori" className="formLabel">
                      Kategori
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Pilih Kategori</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="harga" className="formLabel">
                      Harga
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="form-control" id="harga" placeholder="Masukan Harga" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="stokProduk" className="formLabel">
                      Stok Produk
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <input type="number" className="form-control" id="stokProduk" placeholder="Masukan Stok Produk" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="namaProduk" className="formLabel">
                      Deskripsi Produk
                    </label>
                    <p className="subFormLabel">
                      Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Semakin detail, semakin berguna bagi pembeli, cantumkan min. 260 karakter agar pembeli semakin mudah mengerti dan menemukan produk
                      anda
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="namaProduk" className="formLabel">
                      Gambar Produk
                    </label>
                  </div>
                  <div className="col-lg-6">
                    <img src={LogoPlaceholder} width={189} className="img-thumbnail mb-2" alt="..." />
                    <input class="form-control" type="file" id="formFile"></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 ms-auto">
                    <button className="btn btn-blue">Simpan Produk</button>
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

export default TambahProduk;
