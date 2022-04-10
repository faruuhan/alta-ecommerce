import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";

const Profile = () => {
  const [userId, setUserId] = useState("");
  const [dataUser, setDataUser] = useState({});
  const [userToken, setUserToken] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    setUserId(auth[0].data.id);
    setUserToken(auth[0].data.token);
    axios
      .get(`http://8.219.11.61:8000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setDataUser(response.data.data);
      })
      .catch((error) => {
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
            <h3 className="title-section">Profile</h3>
            <div className="card border-0">
              <div className="card-body">
                <h5 className="sub-title-section py-3">Informasi Profile</h5>
                <div className="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="nama" className="formLabel">
                      Nama
                    </label>{" "}
                    {console.log(userId)}
                  </div>
                  <div className="col-lg">
                    <input type="text" className="form-control" id="nama" placeholder="John" defaultValue={dataUser.name} />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="email" className="formLabel">
                      Email
                    </label>
                  </div>
                  <div className="col-lg">
                    <input type="email" className="form-control" id="email" placeholder="John@alterra.id" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-3">
                    <label htmlFor="alamat" className="formLabel">
                      Alamat
                    </label>
                  </div>
                  <div className="col-lg">
                    <input type="text" className="form-control" id="alamat" placeholder="Jakarta" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 ms-auto">
                    <button type="submit" className="btn btn-blue" style={{ width: "180px" }}>
                      Simpan
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

export default Profile;
