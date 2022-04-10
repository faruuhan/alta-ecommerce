import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { BsTrash } from "react-icons/bs";
import LogoPlaceholder from "../assets/placeholder-image.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/StylePlus.css";

const Cart = () => {
  const [dataCart, setDataCart] = useState([]);
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
    getDataProduct();
    axios
      .get(`http://8.219.11.61:8000/carts/`, {
        headers: {
          Authorization: `Bearer ${auth[0].data.token}`,
        },
      })
      .then((response) => {
        setDataCart(response.data.data);
        setReadyPage(true);
      })
      .catch((error) => {
        console.log(error);
      });
    document.title = "Keranjang";
  };

  const getDataProduct = () => {
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
  };

  const filterDataCart = dataCart.filter((carts) => carts.buyer_id == userId);

  const ressultDataCart = dataProduct.filter((prod) => filterDataCart.some((cart) => cart.product_id === prod.ID));

  console.log(ressultDataCart);

  const checkout = () => {
    // axios
    //   .post(`https://satriacening.cloud.okteto.net/order/`)
    //   .then((ress) => {
    //     console.log(ress);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // window.location.href = "/Checkout";
  };

  if (readyPage) {
    return (
      <Layout>
        <div className="container">
          <div className="row pt-5 pb-4">
            <h3 className="title-section">Keranjang</h3>
            <div className="col-lg-8">
              <div className="card border-0">
                <div className="card-body">
                  {filterDataCart.map((carts) => {
                    return (
                      <div className="row gap-3 mb-2" key={carts.ID}>
                        <div className="col-lg-3 col-md-3 col-sm-4">
                          <img src={LogoPlaceholder} width={150} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-4 d-flex flex-column">
                          <h5></h5>
                          <p>Rp. 5000</p>
                          <p className="mt-auto">Sub total: Rp. {carts.total}</p>
                        </div>
                        <div className="col-lg-3 col-md-3 d-flex align-items-end justify-content-sm-end">
                          <button className="btn btn-transparent">
                            <BsTrash size={25} color={"#C4C4C4"} />
                          </button>
                          <input type="number" defaultValue={carts.quantity} className="ms-3 form-control border-0 border-bottom" style={{ width: "80px" }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0">
                <div className="card-body">
                  <h5>Rincian Belanja</h5>
                  <p>Total Qty : {filterDataCart.length}</p>
                  <p>Biaya Pengiriman: Gratis</p>
                  <h5>Total Harga: Rp. 20,000</h5>
                  <div className="d-flex mt-4">
                    <button onClick={() => checkout()} className="btn btn-blue ms-auto" style={{ width: "100px" }}>
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
  }
};

export default Cart;
