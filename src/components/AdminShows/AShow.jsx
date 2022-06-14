import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import facade from "../../apiFacade";

const AShow = ({ s, setShows }) => {
	const [editState, setEditState] = useState(false);
	const [name, setName] = useState(s.name);
	const [location, setLocation] = useState(s.location);

	const [startYear, setStartYear] = useState(s.startDateTime.date.year);
	const [startMonth, setStartMonth] = useState(s.startDateTime.date.month);
	const [startDay, setStartDay] = useState(s.startDateTime.date.day);
	const [startHour, setStartHour] = useState(s.startDateTime.time.hour);
	const [startMin, setStartMin] = useState(s.startDateTime.time.minute);

	const [endYear, setEndYear] = useState(s.startDateTime.date.year);
	const [endMonth, setEndMonth] = useState(s.startDateTime.date.month);
	const [endDay, setEndDay] = useState(s.startDateTime.date.day);
	const [endHour, setEndHour] = useState(s.startDateTime.time.hour);
	const [endMin, setEndMin] = useState(s.startDateTime.time.minute);

	const [festivalInput, setFestivalInput] = useState(1);

	const [festivals, setFestivals] = useState([]);

	useEffect(() => {
		facade.getFestivals(setFestivals);
	}, []);

	const onClickEdit = (evt) => {
		evt.preventDefault();
		setEditState(true);
	};

	const onClickUpdate = (evt) => {
		evt.preventDefault();
		setEditState(false);
		facade.updateShow(setShows, s.id, name, location, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin, festivalInput);
	};

	const onClickCancel = (evt) => {
		evt.preventDefault();
		setEditState(false);
	};

	const onClickDelete = (evt) => {
		evt.preventDefault();
		facade.deleteShow(setShows, s.id);
	};

	return (
		<>
			{(() => {
				if (editState) {
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
												onClickUpdate(e);
											}}
										>
											Update Show
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
							<div className="afestival-container">
								<p className="afestival-name afestival-item">
									<b>Festival</b>
									<br />
									{s.festival.name}
								</p>
								<p className="afestival-name afestival-item">
									<b>Name</b>
									<br />
									{s.name}
								</p>
								<p className="afestival-city afestival-item">
									<b>Location</b>
									<br />
									{s.location}
								</p>
								<p className="afestival-start-date afestival-item">
									<b>Start date</b>
									<br />
									{s.startDateTime.date.year}-{s.startDateTime.date.month}-{s.startDateTime.date.day}
								</p>
								<p className="afestival-start-time afestival-item">
									<b>Start time</b>
									<br />
									{s.startDateTime.time.hour}:{s.startDateTime.time.minute}
								</p>
								<p className="afestival-end-date afestival-item">
									<b>End date</b>
									<br />
									{s.endDateTime.date.year}-{s.endDateTime.date.month}-{s.endDateTime.date.day}
								</p>
								<p className="afestival-end-time afestival-item">
									<b>End time</b>
									<br />
									{s.endDateTime.time.hour}:{s.endDateTime.time.minute}
								</p>
								<div className="afestival-btn-container afestival-item">
									<button
										className="afestival-btn"
										onClick={(e) => {
											onClickEdit(e);
										}}
									>
										Edit Show
									</button>
								</div>
								<div className="afestival-btn-container afestival-item">
									<button
										className="afestival-btn"
										onClick={(e) => {
											onClickDelete(e);
										}}
									>
										Delete Show
									</button>
								</div>
							</div>
						</>
					);
				}
			})()}
		</>
	);
};

export default AShow;
