import React from "react";
import "./Navbar.css";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ({ role, logout }) => {
	return (
		<>
			{(() => {
				if (role === "user") {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/app-logo.png")} alt="Logo" />
							</NavLink>
							<NavMenu>
								<NavLink to="/user" activestyle="true">
									User
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/" onClick={logout}>
									Logout
								</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				} else if (role === "admin") {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/app-logo.png")} alt="Logo" />
							</NavLink>
							<NavMenu>
								<NavLink to="/admin" activestyle="true">
									Admin
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/" onClick={logout}>
									Logout
								</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				} else {
					return (
						<Nav>
							<NavLink to="/">
								<img className="logo-img" src={require("../../images/app-logo.png")} alt="Logo" />
							</NavLink>
							<NavMenu>
								<NavLink to="/signup" activestyle="true">
									Signup
								</NavLink>
							</NavMenu>
							<NavBtn>
								<NavBtnLink to="/login">Login</NavBtnLink>
							</NavBtn>
						</Nav>
					);
				}
			})()}
		</>
	);
};

export default Navbar;
