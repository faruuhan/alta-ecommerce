/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import ProfilePage from "../pages/ProfilePage";
import Register from "../pages/RegisterPage";

const Application = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/ProfilePage" element={<ProfilePage />} />
					<Route path="/DetailPage" element={<DetailPage />} />
					<Route path="/LoginPage" element={<Login />} />
					<Route path="/RegisterPage" element={<Register />} />
					<Route path="/NotFound" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Application;
