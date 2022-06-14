import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../apiFacade";
import ANewShow from "../components/AdminShows/ANewShow";
import AShow from "../components/AdminShows/AShow";

const AdminShow = ({ role }) => {
	const [shows, setShows] = useState([
		{
			id: 0,
			name: "",
			location: "",
			startDateTime: {
				date: {
					year: 2022,
					month: 1,
					day: 1,
				},
				time: {
					hour: 14,
					minute: 30,
				},
			},
			endDateTime: {
				date: {
					year: 2022,
					month: 1,
					day: 2,
				},
				time: {
					hour: 12,
					minute: 15,
				},
			},
			guestList: [],
			festival: {
				id: 0,
				name: "",
				city: "",
				// startDateTime: {
				// 	date: {
				// 		year: 2022,
				// 		month: 1,
				// 		day: 1,
				// 	},
				// 	time: {
				// 		hour: 14,
				// 		minute: 30,
				// 	},
				// },
				// endDateTime: {
				// 	date: {
				// 		year: 2022,
				// 		month: 1,
				// 		day: 2,
				// 	},
				// 	time: {
				// 		hour: 12,
				// 		minute: 15,
				// 	},
				// },
			},
		},
	]);

	useEffect(() => {
		facade.getAllShows(setShows);
	}, []);

	return (
		<>
			{(() => {
				if (role === "admin") {
					return (
						<>
							<div className="anew-show">
								<ANewShow setShows={setShows} />
							</div>
							{shows.map((s) => {
								return <AShow key={s.id} s={s} setShows={setShows} />;
							})}
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

export default AdminShow;
