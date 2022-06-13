import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = ({ lsType, onChange, onClick, responseText }) => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const lsSignupRedirectClick = (evt) => {
		evt.preventDefault();
		navigate("/signup");
	};

	const navigate = useNavigate();

	return (
		<>
			<div className="ls-box">
				<div className="ls-wrapper">
					<header>{lsType}</header>
					<form onChange={onChange}>
						<div className="ls-field ls-email">
							<div className="ls-input-area">
								<input
									type="text"
									placeholder="Username"
									id="username"
									value={usernameInput}
									onChange={(e) => {
										setUsernameInput(e.target.value);
									}}
								/>
								<i className="ls-icon">
									<FaEnvelope />
								</i>
							</div>
						</div>
						<div className="ls-field ls-password">
							<div className="ls-input-area">
								<input
									type="password"
									placeholder="Password"
									id="password"
									value={passwordInput}
									onChange={(e) => {
										setPasswordInput(e.target.value);
									}}
								/>
								<i className="ls-icon">
									<FaLock />
								</i>
							</div>
						</div>
						<button className="ls-submit-btn" onClick={onClick}>
							{lsType}
						</button>
						<p className="ls-status-text">{responseText}</p>
						{lsType === "Login" ? (
							<div className="ls-signup-redirect-wrapper">
								<p className="ls-signup-redirect-text">Don't have an account?</p>
								<button className="ls-signup-redirect-btn rmv-border" onClick={lsSignupRedirectClick}>
									Signup here!
								</button>
							</div>
						) : (
							<></>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default LoginSignup;
