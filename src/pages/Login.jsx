import jwt_decode from "jwt-decode";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facade from "../apiFacade";
import LoginSignup from "../components/LoginSignup/LoginSignup";

const Login = ({ setLoggedIn, setRole, setUsername, setGuestProfile }) => {
	const init = { username: "", password: "" };
	const [loginCredentials, setLoginCredentials] = useState(init);
	const [responseText, setResponseText] = useState("");

	const onChange = (evt) => {
		setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
	};

	const performLogin = (evt) => {
		evt.preventDefault();
		login(loginCredentials.username, loginCredentials.password);
	};

	const login = (user, pass) => {
		facade.login(user, pass, setResponseText).then((res) => {
			setLoggedIn(true);
			setUsername(user);
			let token = facade.getToken();
			let decoded = jwt_decode(token);
			setRole(decoded.roles);
			facade.checkGuest(user, setGuestProfile);

			navigate("/");
		});
	};

	const navigate = useNavigate();

	return (
		<div>
			<LoginSignup lsType={"Login"} onChange={onChange} onClick={performLogin} responseText={responseText} />
		</div>
	);
};

export default Login;
