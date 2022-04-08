/** @format */

import React from "react";
import "../styles/Profile.css";

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="container-fluid" style={{ background: "#66a6ff", maxHeight: "80px" }}>
				<h4 className="pt-2">Profil Saya</h4>
				<p>Kelola Informasi Akun Anda</p>
			</div>
			<div className="container-fluid">
				<div className="row">
					<form className="pt-4">
						<div className="row mb-3">
							<label for="inputUsername" className="col-sm-3 col-form-label">
								Username :
							</label>
							<div className="col-sm-9">
								<input type="text" className="form-control" id="inputUsername" />
							</div>
						</div>
						<div className="row mb-3">
							<label for="inputFullName" className="col-sm-3 col-form-label">
								Nama :
							</label>
							<div className="col-sm-9">
								<input type="text" className="form-control" id="inputFullName" />
							</div>
						</div>
						<div className="row mb-3">
							<label for="inputEmail" className="col-sm-3 col-form-label">
								Email :
							</label>
							<div className="col-sm-9">
								<input type="email" className="form-control" id="inputEmail" />
							</div>
						</div>
					</form>
				</div>
				<div className="submitButton d-flex justify-content-center pt-3">
					<input type="submit" value="Simpan Perubahan" className="submit-btn" />
				</div>
			</div>
		</div>
	);
};

export default Profile;
