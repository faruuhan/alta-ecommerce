/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProfilePicture = () => {
	return (
		<>
			<div className="container bg-white h-50 d-flex flex-column justify-content-center text-center">
				<img src="" />
				<form>
					<div className="form-group">
						<input type="file" class="form-control-file" />
					</div>
				</form>
			</div>
		</>
	);
};

export default ProfilePicture;
