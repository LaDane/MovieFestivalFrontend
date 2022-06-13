import React, { useState } from "react";
import "./AFestival.css";
import facade from "../../apiFacade";

const AFestival = ({ f, setFestivals }) => {
	const [editState, setEditState] = useState(false);
	const [name, setName] = useState(f.name);
	const [city, setCity] = useState(f.city);

	const [startYear, setStartYear] = useState(f.startDateTime.date.year);
	const [startMonth, setStartMonth] = useState(f.startDateTime.date.month);
	const [startDay, setStartDay] = useState(f.startDateTime.date.day);
	const [startHour, setStartHour] = useState(f.startDateTime.time.hour);
	const [startMin, setStartMin] = useState(f.startDateTime.time.minute);

	const [endYear, setEndYear] = useState(f.startDateTime.date.year);
	const [endMonth, setEndMonth] = useState(f.startDateTime.date.month);
	const [endDay, setEndDay] = useState(f.startDateTime.date.day);
	const [endHour, setEndHour] = useState(f.startDateTime.time.hour);
	const [endMin, setEndMin] = useState(f.startDateTime.time.minute);

	const onClickEdit = (evt) => {
		evt.preventDefault();
		setEditState(true);
	};

	const onClickUpdate = (evt) => {
		evt.preventDefault();
		setEditState(false);
		facade.updateFestival(setFestivals, f.id, name, city, startYear, startMonth, startDay, startHour, startMin, endYear, endMonth, endDay, endHour, endMin);
	};

	const onClickCancel = (evt) => {
		evt.preventDefault();
		setEditState(false);
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
										placeholder="City"
										id="city"
										value={city}
										onChange={(e) => {
											setCity(e.target.value);
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
									<div className="afestival-input-btn-container afestival-input">
										<button
											className="afestival-input-btn"
											onClick={(e) => {
												onClickUpdate(e);
											}}
										>
											Update Festival
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
									<b>Name</b>
									<br />
									{f.name}
								</p>
								<p className="afestival-city afestival-item">
									<b>City</b>
									<br />
									{f.city}
								</p>
								<p className="afestival-start-date afestival-item">
									<b>Start date</b>
									<br />
									{f.startDateTime.date.year}-{f.startDateTime.date.month}-{f.startDateTime.date.day}
								</p>
								<p className="afestival-start-time afestival-item">
									<b>Start time</b>
									<br />
									{f.startDateTime.time.hour}:{f.startDateTime.time.minute}
								</p>
								<p className="afestival-end-date afestival-item">
									<b>End date</b>
									<br />
									{f.endDateTime.date.year}-{f.endDateTime.date.month}-{f.endDateTime.date.day}
								</p>
								<p className="afestival-end-time afestival-item">
									<b>End time</b>
									<br />
									{f.endDateTime.time.hour}:{f.endDateTime.time.minute}
								</p>
								<div className="afestival-btn-container afestival-item">
									<button
										className="afestival-btn"
										onClick={(e) => {
											onClickEdit(e);
										}}
									>
										Edit Festival
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

export default AFestival;
