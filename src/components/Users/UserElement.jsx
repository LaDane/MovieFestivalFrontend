import React from "react";

const UserElement = ({ user }) => {
	const onClick = (evt) => {
		evt.preventDefault();
	};

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
};

export default UserElement;
