import React from "react";

const UserElement = ({ user }) => {
	return (
		<>
			<div className="user-element">
				<p className="user-element-id">{user.id}</p>
				<p className="user-element-username">{user.username}</p>
				<p className="user-element-name">{user.name}</p>
				<p className="user-element-phone">{user.phone}</p>
				<p className="user-element-email">{user.email}</p>
				<p className="user-element-status">{user.status}</p>
				<p className="user-element-festival">{user.festival}</p>
			</div>
		</>
	);
};

export default UserElement;
