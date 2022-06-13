import React from "react";
import { useNavigate } from "react-router-dom";
import facade from "../../apiFacade";

const ShowItem = ({ data, item, guestProfile, setGuestProfile, updateGuestShows }) => {
	// const onClick = (evt, id) => {
	// 	evt.preventDefault();
	// 	console.log(id);
	// 	// navigate("/character-sheet");
	// };

	const onClickAttend = (evt, id) => {
		evt.preventDefault();
		facade.attendShow(guestProfile.id, id, setGuestProfile, updateGuestShows);
	};

	const onClickGuestProfile = (evt) => {
		evt.preventDefault();
		navigate("/guest");
	};

	const navigate = useNavigate();

	return (
		<>
			<div className="show-item-container">
				<p className="show-item-name show-item-vertical-center">{item.name}</p>
				<p className="show-item-location show-item-vertical-center">{item.location}</p>
				<p className="show-item-start-date">
					{item.startDateTime.date.year}-{item.startDateTime.date.month}-{item.startDateTime.date.day}
				</p>
				<p className="show-item-start-time">
					{item.startDateTime.time.hour}:{item.startDateTime.time.minute}
				</p>
				<p className="show-item-end-date">
					{item.endDateTime.date.year}-{item.endDateTime.date.month}-{item.endDateTime.date.day}
				</p>
				<p className="show-item-end-time">
					{item.endDateTime.time.hour}:{item.endDateTime.time.minute}
				</p>
				<p className="show-item-attending">{item.guestList.length}</p>

				{(() => {
					if (guestProfile === "" || guestProfile === null || guestProfile.id === 0) {
						return (
							<>
								<div className="show-item-btn-container">
									<button
										className="show-item-btn"
										onClick={(e) => {
											onClickGuestProfile(e);
										}}
									>
										Create Guest Profile
									</button>
								</div>
							</>
						);
					}
					// else if (data.filter((e) => e.id === item.id).length > 0) {
					// 	<p>here</p>;
					// }
					else {
						return (
							<>
								<div className="show-item-btn-container">
									<button
										className="show-item-btn"
										onClick={(e) => {
											onClickAttend(e, item.id);
										}}
									>
										Attend Show
									</button>
								</div>
							</>
						);
					}
				})()}
			</div>
		</>
	);
};

export default ShowItem;
