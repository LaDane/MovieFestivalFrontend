import React, { useState } from "react";
import { useEffect } from "react";
import facade from "../../apiFacade";

const ANewShow = ({ setShows }) => {
	const [createState, setCreateState] = useState(false);
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");

	const [startYear, setStartYear] = useState();
	const [startMonth, setStartMonth] = useState();
	const [startDay, setStartDay] = useState();
	const [startHour, setStartHour] = useState();
	const [startMin, setStartMin] = useState();

	const [endYear, setEndYear] = useState();
	const [endMonth, setEndMonth] = useState();
	const [endDay, setEndDay] = useState();
	const [endHour, setEndHour] = useState();
	const [endMin, setEndMin] = useState();

	const [festivalInput, setFestivalInput] = useState(1);

	const [festivals, setFestivals] = useState([]);

	useEffect(() => {
		facade.getFestivals(setFestivals);
	}, []);

	const onClickCreate = (evt) => {
		evt.preventDefault();
		setCreateState(true);
	};

	const onClickSubmit = (evt) => {
		evt.preventDefault();
		setCreateState(false);
		facade.createShow(setShows, name, location, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin, festivalInput);
		// facade.createFestival(setFestivals, name, city, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin);
	};

	const onClickCancel = (evt) => {
		evt.preventDefault();
		setCreateState(false);
	};
	return (
		<>
			{(() => {
				if (createState) {
					return (
						<>
							<div className="afestival-container-input">
								<form>
									Name:
									<input
										className="afestival-input"
										type="text"
										placeholder="name"
										id="name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
									<br />
									City:
									<input
										className="afestival-input"
										type="text"
										placeholder="Location"
										id="location"
										value={location}
										onChange={(e) => {
											setLocation(e.target.value);
										}}
									/>
									<br />
									Start Year:
									<input
										className="afestival-input"
										type="number"
										placeholder="Start Year"
										id="startYear"
										value={startYear}
										onChange={(e) => {
											setStartYear(e.target.value);
										}}
									/>
									<br />
									Start Month:
									<input
										className="afestival-input"
										type="number"
										placeholder="Start Month"
										id="startMonth"
										value={startMonth}
										onChange={(e) => {
											setStartMonth(e.target.value);
										}}
									/>
									<br />
									Start Day:
									<input
										className="afestival-input"
										type="number"
										placeholder="Start Day"
										id="startDay"
										value={startDay}
										onChange={(e) => {
											setStartDay(e.target.value);
										}}
									/>
									<br />
									Start Hour:
									<input
										className="afestival-input"
										type="number"
										placeholder="Start Hour"
										id="startHour"
										value={startHour}
										onChange={(e) => {
											setStartHour(e.target.value);
										}}
									/>
									<br />
									Start Minute:
									<input
										className="afestival-input"
										type="number"
										placeholder="Start Minute"
										id="startMin"
										value={startMin}
										onChange={(e) => {
											setStartMin(e.target.value);
										}}
									/>
									<br />
									End Year:
									<input
										className="afestival-input"
										type="number"
										placeholder="End Year"
										id="endYear"
										value={endYear}
										onChange={(e) => {
											setEndYear(e.target.value);
										}}
									/>
									<br />
									End Month:
									<input
										className="afestival-input"
										type="number"
										placeholder="End Month"
										id="endMonth"
										value={endMonth}
										onChange={(e) => {
											setEndMonth(e.target.value);
										}}
									/>
									<br />
									End Day:
									<input
										className="afestival-input"
										type="number"
										placeholder="End Day"
										id="endDay"
										value={endDay}
										onChange={(e) => {
											setEndDay(e.target.value);
										}}
									/>
									<br />
									End Hour:
									<input
										className="afestival-input"
										type="number"
										placeholder="End Hour"
										id="endHour"
										value={endHour}
										onChange={(e) => {
											setEndHour(e.target.value);
										}}
									/>
									<br />
									End Minute:
									<input
										className="afestival-input"
										type="number"
										placeholder="End Minute"
										id="endMin"
										value={endMin}
										onChange={(e) => {
											setEndMin(e.target.value);
										}}
									/>
									<br />
									<select
										className="afestival-input"
										name="festivalName"
										id="festivalName"
										defaultValue={"DEFAULT"}
										onChange={(e) => {
											setFestivalInput(e.target.value);
										}}
									>
										<option value="DEFAULT" disabled hidden>
											Choose Festival
										</option>
										{festivals.map((f) => (
											<option key={f.id} value={f.id}>
												{f.name}
											</option>
										))}
									</select>
									<br />
									<div className="afestival-input-btn-container afestival-input">
										<button
											className="afestival-input-btn"
											onClick={(e) => {
												onClickSubmit(e);
											}}
										>
											Create Show
										</button>
									</div>
									<br />
									<div className="afestival-input-btn-container afestival-input">
										<button
											className="afestival-input-btn"
											onClick={(e) => {
												onClickCancel(e);
											}}
										>
											Cancel
										</button>
									</div>
								</form>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div className="afestival-btn-container afestival-item">
								<button
									className="afestival-btn"
									onClick={(e) => {
										onClickCreate(e);
									}}
								>
									Create Show
								</button>
							</div>
						</>
					);
				}
			})()}
		</>
	);
};

export default ANewShow;
