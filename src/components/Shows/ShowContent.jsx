import React from "react";
import ShowItem from "./ShowItem";
import "./Show.css";

const ShowContent = ({ data, guestProfile, setGuestProfile, updateGuestShows }) => {
	return (
		<>
			<div className="show-content-container">
				<div className="show-content-titles">
					<p className="show-content-name">Show Name</p>
					<p className="show-content-location">Location</p>
					<p className="show-content-start">Starts at</p>
					<p className="show-content-end">Ends at</p>
					<p className="show-content-attending">Attending</p>
				</div>

				{(() => {
					if (data.length !== 0 && data[0].id !== 0) {
						return (
							<>
								{data.map((item) => {
									return <ShowItem key={item.id} data={data} item={item} guestProfile={guestProfile} setGuestProfile={setGuestProfile} updateGuestShows={updateGuestShows} />;
								})}
							</>
						);
					} else {
						return (
							<>
								<p>No data</p>
							</>
						);
					}
				})()}
			</div>
		</>
	);
};

export default ShowContent;
