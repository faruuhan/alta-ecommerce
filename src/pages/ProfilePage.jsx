/** @format */

import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Profile from "../components/Profile";
import ProfilePicture from "../components/ProfilePicture";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const ProfilePage = () => {
	return (
		<Layout>
			<div className="container">
				<div className="row pt-5">
					<div className="col-lg-3">
						<SideNav />
					</div>
					<div className="col-lg-5" style={{ padding: "0" }}>
						<Profile />
					</div>
					<div className="col-lg-4 border">
						<ProfilePicture />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProfilePage;
