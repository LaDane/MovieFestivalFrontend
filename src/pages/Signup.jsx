import React from "react";
import { useState } from "react";
import facade from "../apiFacade";
import LoginSignup from "../components/LoginSignup/LoginSignup";

const Signup = () => {
	const init = { username: "", password: "" };
	const [signupCredentials, setSignupCredentials] = useState(init);
	const [responseText, setResponseText] = useState("");

	const onChange = (evt) => {
		setSignupCredentials({ ...signupCredentials, [evt.target.id]: evt.target.value });
	};

	const performSignup = (evt) => {
		evt.preventDefault();
		signup(signupCredentials.username, signupCredentials.password);
	};

	const signup = (user, pass) => {
		facade.signup(user, pass, setResponseText);
	};

	return (
		<div>
			<LoginSignup lsType={"Signup"} onChange={onChange} onClick={performSignup} responseText={responseText} />
		</div>
	);
};

export default Signup;
