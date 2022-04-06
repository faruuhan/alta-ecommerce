import React from "react";
import { BsPersonCircle, BsBoxSeam, BsArchive, BsListCheck } from "react-icons/bs";
import "../styles/SideNav.css";

const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="sideNavItem">
        <BsPersonCircle size={25} />
        <a href="" className="sideNavLink">
          Profile
        </a>
      </div>
      <div className="sideNavItem">
        <BsBoxSeam size={25} />
        <a href="" className="sideNavLink">
          Tambah Produk
        </a>
      </div>
      <div className="sideNavItem">
        <BsArchive size={25} />
        <a href="" className="sideNavLink">
          Daftar Produk
        </a>
      </div>
      <div className="sideNavItem">
        <BsListCheck size={25} />
        <a href="" className="sideNavLink">
          History Order
        </a>
      </div>
    </div>
  );
};

export default SideNav;
