import React from "react";
import { useState } from "react";
import facade from "../apiFacade";
import GuestSetup from "../components/Guest/GuestSetup";
import { useNavigate } from "react-router-dom";

const Guest = ({ setGuestProfile, username }) => {
	const gData = {
		name: "",
		phone: "",
		email: "",
	};
	const [guestData, setGuestData] = useState(gData);

	const onChange = (evt) => {
		setGuestData({ ...guestData, [evt.target.id]: evt.target.value });
	};

	const onClick = (evt) => {
		evt.preventDefault();
		facade.createGuest(guestData.name, guestData.phone, guestData.email, username, setGuestProfile);
		navigate("/shows");
	};

	const navigate = useNavigate();

	return (
		<>
			<GuestSetup onChange={onChange} onClick={onClick} />
		</>
	);
};

export default Guest;
