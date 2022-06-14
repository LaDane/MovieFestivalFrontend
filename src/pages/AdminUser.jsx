import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../apiFacade";
import UserElement from "../components/AdminUsers/UserElement";
import "../components/AdminUsers/Users.css";

const AdminUser = ({ role }) => {
	const [allUsers, setAllUsers] = useState({
		users: [
			{
				id: 0,
				username: "",
				name: "",
				phone: "",
				email: "",
				status: "",
				festival: "",
			},
		],
	});

	useEffect(() => {
		facade.getAllUsers(setAllUsers);
	}, []);

	return (
		<>
			{(() => {
				if (role === "admin") {
					return (
						<>
							<div className="user-list-container">
								<div className="user-list-wrapper">
									{allUsers.users.map((user) => {
										return (
											<div key={user.id} className="user-list-element">
												<UserElement user={user} setAllUsers={setAllUsers} />
											</div>
										);
									})}
								</div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<p>Must be logged in as admin</p>
						</>
					);
				}
			})()}
		</>
	);
};

export default AdminUser;
