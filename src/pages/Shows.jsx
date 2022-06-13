import React, { useState } from "react";
import { useEffect } from "react";
import ShowContent from "../components/Shows/ShowContent";
import Tabs from "../components/Tabs/Tabs";
import facade from "../apiFacade";

const Shows = ({ guestProfile, setGuestProfile }) => {
	const [allShows, setAllShows] = useState([
		{
			id: 0,
			name: "",
			location: "",
			startDateTime: {
				date: {
					year: 0,
					month: 0,
					day: 0,
				},
				time: {
					hour: 0,
					minute: 0,
				},
			},
			endDateTime: {},
			guestList: [],
		},
	]);
	const [guestShows, setGuestShows] = useState([
		{
			id: 0,
			name: "",
			location: "",
			startDateTime: {
				date: {
					year: 0,
					month: 0,
					day: 0,
				},
				time: {
					hour: 0,
					minute: 0,
				},
			},
			endDateTime: {},
			guestList: [],
		},
	]);

	useEffect(() => {
		facade.getAllShows(setAllShows);
		facade.getGuestShows(guestProfile.id, setGuestShows);
	}, []);

	const updateGuestShows = () => {
		facade.getGuestShows(guestProfile.id, setGuestShows);
	};

	const tabButtons = {
		tabs: [
			{ state: 1, line1: "All", line2: "Shows" },
			{ state: 2, line1: "Joined", line2: "Shows" },
		],
	};

	const tabContent = {
		content: [
			{ state: 1, comp: ShowContent, data: allShows },
			{ state: 2, comp: ShowContent, data: guestShows },
		],
	};

	return (
		<>
			<div className="shows-container">
				<div className="shows-wrapper">
					<Tabs tabButtons={tabButtons} tabContent={tabContent} guestProfile={guestProfile} setGuestProfile={setGuestProfile} updateGuestShows={updateGuestShows} />
				</div>
			</div>
		</>
	);
};

export default Shows;
