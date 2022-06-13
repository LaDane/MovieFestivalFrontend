import React from "react";

const ShowItem = ({ item }) => {
	const onClick = (evt, id) => {
		evt.preventDefault();
		console.log(id);
		// navigate("/character-sheet");
	};

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

				<div className="show-item-btn-container">
					<button
						className="show-item-btn"
						onClick={(e) => {
							onClick(e, item.id);
						}}
					>
						Attend Show
					</button>
				</div>
			</div>
		</>
	);
};

export default ShowItem;
