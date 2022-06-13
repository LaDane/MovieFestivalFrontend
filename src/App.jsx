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

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [role, setRole] = useState("");
	const [username, setUsername] = useState("");

	const logout = () => {
		facade.logout();
		setLoggedIn(false);
		setRole("");
		setUsername("");
	};

	return (
		<div className="App">
			<Router basename="/filmfestival">
				<Navbar role={role} logout={logout} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRole={setRole} setUsername={setUsername} />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/admin" element={<Admin />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
