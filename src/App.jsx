// npm install jwt-decode

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styling/App.css";
import facade from "./apiFacade";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Admin from "./pages/Admin";
import User from "./pages/User";
import Users from "./pages/AdminUser";
import Shows from "./pages/Shows";
import Guest from "./pages/Guest";
import AdminFestival from "./pages/AdminFestival";
import AdminShow from "./pages/AdminShow";
import AdminUser from "./pages/AdminUser";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [role, setRole] = useState("");
	const [username, setUsername] = useState("");
	const [guestProfile, setGuestProfile] = useState({
		id: 0,
		name: "",
		phone: "",
		email: "",
		status: "",
		showList: [],
	});

	const logout = () => {
		facade.logout();
		setLoggedIn(false);
		setRole("");
		setUsername("");
		setGuestProfile({
			id: 0,
			name: "",
			phone: "",
			email: "",
			status: "",
			showList: [],
		});
	};

	return (
		<div className="App">
			<Router basename="/filmfestival">
				<Navbar role={role} logout={logout} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRole={setRole} setUsername={setUsername} setGuestProfile={setGuestProfile} />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/admin" element={<Admin />} />
					<Route path="/user" element={<User />} />

					<Route path="/shows" element={<Shows role={role} guestProfile={guestProfile} setGuestProfile={setGuestProfile} />} />
					<Route path="/guest" element={<Guest setGuestProfile={setGuestProfile} username={username} />} />
					<Route path="/adminusers" element={<AdminUser role={role} />} />
					<Route path="/adminfestivals" element={<AdminFestival role={role} />} />
					<Route path="/adminshows" element={<AdminShow role={role} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
