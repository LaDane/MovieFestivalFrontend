import React from "react";
import ShowItem from "./ShowItem";
import "./Show.css";

const ShowContent = ({ data }) => {
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
					if (data[0].id !== 0) {
						return (
							<>
								{data.map((item) => {
									return <ShowItem key={item.id} item={item} />;
								})}
							</>
						);
					} else {
						return (
							<>
								<p>Fetching data</p>
							</>
						);
					}
				})()}
			</div>
		</>
	);
};

export default ShowContent;
