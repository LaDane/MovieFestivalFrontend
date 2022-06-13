import React from "react";
import UserElement from "./UserElement";

const UserList = ({ allUsers }) => {
	return (
		<>
			<div className="user-list-container">
				<div className="user-list-wrapper">
					{allUsers.users.map((user) => {
						return (
							<div key={user.id} className="user-list-element">
								<UserElement user={user} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default UserList;
