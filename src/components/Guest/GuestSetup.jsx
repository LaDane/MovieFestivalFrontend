import React from "react";
import { useState } from "react";

const GuestSetup = ({ onChange, onClick }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	return (
		<>
			<div className="ls-box">
				<div className="ls-wrapper">
					<header>Setup Guest Profile</header>
					<form onChange={onChange}>
						<div className="ls-field">
							<div className="ls-input-area">
								<input
									type="text"
									placeholder="Name"
									id="name"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="ls-field">
							<div className="ls-input-area">
								<input
									type="text"
									placeholder="Phone Number"
									id="phone"
									value={phone}
									onChange={(e) => {
										setPhone(e.target.value);
									}}
								/>
							</div>
						</div>
						<div className="ls-field">
							<div className="ls-input-area">
								<input
									type="text"
									placeholder="Email"
									id="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
						</div>
						<button className="ls-submit-btn" onClick={onClick}>
							Create Guest Profile
						</button>
					</form>
				</div>
			</div>
			<br />
			<br />
			<br />
		</>
	);
};

export default GuestSetup;
