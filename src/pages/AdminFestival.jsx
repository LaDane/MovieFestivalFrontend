import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../apiFacade";
import AFestival from "../components/AdminFestivals/AFestival";
import ANewFestival from "../components/AdminFestivals/ANewFestival";

const AdminFestival = ({ role }) => {
	const [festivals, setFestivals] = useState([
		{
			id: 1,
			name: "",
			city: "",
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
		},
	]);

	useEffect(() => {
		facade.getFestivals(setFestivals);
	}, []);

	return (
		<>
			{(() => {
				if (role === "admin") {
					return (
						<>
							<div className="anew-festival-container">
								<ANewFestival setFestivals={setFestivals} />
							</div>
							<br />
							{festivals.map((f) => {
								return <AFestival key={f.id} f={f} setFestivals={setFestivals} />;
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

export default AdminFestival;
