import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Homepage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [readyPage, setReadyPage] = useState("false");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
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
    document.title = "Homepage";
  };

  const addToCart = (products) => {
    const data = {
      product_id: products.ID,
      quantity: 1,
    };

    axios
      .post(`http://8.219.11.61:8000/carts/`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then(() => {
        alert("Produk telah ditambah ke keranjang!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (readyPage) {
    return (
      <Layout>
        <div className="container">
          <div className="row justify-content-center flex-wrap gap-3 py-5">
            {dataProduct.map((products) => {
              return (
                <div className="col-lg-3" key={products.ID}>
                  <div className="card border-0">
                    <img src={products.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="title-class">{products.name}</h5>
                      <p className="card-subtitle mb-2 text-muted">{products.category}</p>
                      <strong>Rp. {products.price}</strong>
                      <div className="d-flex">
                        <button className="btn btn-blue ms-auto" onClick={() => addToCart(products)}>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
};

export default Homepage;
