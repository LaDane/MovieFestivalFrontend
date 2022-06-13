import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../apiFacade";
import UserList from "../components/Users/UserList";

const Users = ({ role }) => {
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
					return <UserList allUsers={allUsers} />;
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

export default Users;
