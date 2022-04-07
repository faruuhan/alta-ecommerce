import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/StylePlus.css";

const TambahProduk = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row pt-5 pb-4">
          <div className="col-lg-3">
            <SideNav />
          </div>
          <div className="col-lg-9">
            <h3 className="title-section mb-4">Tambah Produk</h3>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="sub-title-section py-3">Informasi Produk</h5>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="namaProduk" className="formLabel">
                      Nama Produk
                    </label>
                    <p className="subFormLabel">Cantumkan min. 40 karakter agar semakin menarik dan mudah ditemukan oleh pembeli, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.</p>
                  </div>
                  <div className="col-lg">
                    <input type="text" className="form-control" id="namaProduk" placeholder="Contoh: Laptop Ryzen 5 5400u" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="kategori" className="formLabel">
                      Kategori
                    </label>
                  </div>
                  <div className="col-lg">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Pilih Kategori</option>
                      <option value="1">Elektronik</option>
                      <option value="2">Pakaian</option>
                      <option value="3">Alat Rumah Tangga</option>
                    </select>
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="harga" className="formLabel">
                      Harga
                    </label>
                  </div>
                  <div className="col-lg">
                    <input type="text" className="form-control" id="harga" placeholder="Masukan Harga" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="stokProduk" className="formLabel">
                      Stok Produk
                    </label>
                  </div>
                  <div className="col-lg">
                    <input type="number" className="form-control" id="stokProduk" placeholder="Masukan Stok Produk" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="deskripsiProduk" className="formLabel">
                      Deskripsi Produk
                    </label>
                    <p className="subFormLabel">
                      Pastikan deskripsi produk memuat spesifikasi, ukuran, bahan, masa berlaku, dan lainnya. Semakin detail, semakin berguna bagi pembeli, cantumkan min. 260 karakter agar pembeli semakin mudah mengerti dan menemukan produk
                      anda
                    </p>
                  </div>
                  <div className="col-lg">
                    <textarea name="" id="deskripsiProduk" cols="30" rows="10" className="form-control"></textarea>
                  </div>
                </div>
                <div class="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="gambarProduk" className="formLabel">
                      Gambar Produk
                    </label>
                  </div>
                  <div className="col-lg">
                    <input type="text" class="form-control" id="gambarProduk"></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 ms-auto">
                    <button className="btn btn-blue" style={{ width: "180px" }}>
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
};

export default TambahProduk;
