import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../../apiFacade";

const UserElement = ({ user, setAllUsers }) => {
	const [editState, setEditState] = useState(false);
	const [name, setName] = useState(user.name);
	const [phone, setPhone] = useState(user.phone);
	const [email, setEmail] = useState(user.email);
	const [status, setStatus] = useState(user.status);
	const [festivalInput, setFestivalInput] = useState(1);

	const [festivals, setFestivals] = useState([]);

	useEffect(() => {
		facade.getFestivals(setFestivals);
	}, []);

	const onClick = (evt) => {
		evt.preventDefault();
		setEditState(true);
	};

	const onClickUpdate = (evt) => {
		evt.preventDefault();
		setEditState(false);
		facade.updateGuest(setAllUsers, user.id, name, phone, email, status, festivalInput);
		// facade.updateShow(setShows, s.id, name, location, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin, festivalInput);
	};

	const onClickCancel = (evt) => {
		evt.preventDefault();
		setEditState(false);
	};

	return (
		<>
			{(() => {
				if (editState) {
					return (
						<>
							<div className="user-element-container">
								<form>
									Name:
									<input
										className="afestival-input"
										type="text"
										placeholder="name"
										id="name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
									<br />
									Phone:
									<input
										className="afestival-input"
										type="text"
										placeholder="phone"
										id="phone"
										value={phone}
										onChange={(e) => {
											setPhone(e.target.value);
										}}
									/>
									<br />
									Email:
									<input
										className="afestival-input"
										type="text"
										placeholder="email"
										id="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<br />
									Status:
									<input
										className="afestival-input"
										type="text"
										placeholder="status"
										id="status"
										value={status}
										onChange={(e) => {
											setStatus(e.target.value);
										}}
									/>
									<br />
									<select
										className="afestival-input"
										name="festivalName"
										id="festivalName"
										defaultValue={"DEFAULT"}
										onChange={(e) => {
											setFestivalInput(e.target.value);
										}}
									>
										<option value="DEFAULT" disabled hidden>
											Choose Festival
										</option>
										{festivals.map((f) => (
											<option key={f.id} value={f.id}>
												{f.name}
											</option>
										))}
									</select>
									<br />
									<div className="afestival-input-btn-container afestival-input">
										<button
											className="afestival-input-btn"
											onClick={(e) => {
												onClickUpdate(e);
											}}
										>
											Update User
										</button>
									</div>
									<br />
									<div className="afestival-input-btn-container afestival-input">
										<button
											className="afestival-input-btn"
											onClick={(e) => {
												onClickCancel(e);
											}}
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div className="user-element-container">
								<p className="user-element-id">
									<b>ID</b> : {user.id}
								</p>
								<p className="user-element-username">
									<b>username</b> : {user.username}
								</p>
								<p className="user-element-name">
									<b>name</b> : {user.name}
								</p>
								<p className="user-element-phone">
									<b>phone</b> : {user.phone}
								</p>
								<p className="user-element-email">
									<b>email</b> : {user.email}
								</p>
								<p className="user-element-status">
									<b>status</b> : {user.status}
								</p>
								<p className="user-element-festival">
									<b>festival</b> : {user.festival}
								</p>
								<div className="user-element-festival-btn-container">
									<button
										className="user-element-festival-btn"
										onClick={(e) => {
											onClick(e);
										}}
									>
										Edit User
									</button>
								</div>
							</div>
						</>
					);
				}
			})()}
		</>
	);
};

export default UserElement;
