import React from "react";
import "./HomeScreen.css";

const HomeScreen = () => {
	return (
		<div className="homescreen">
			<div className="homescreen-logo">
				<img className="homescreen-img" src={require("../../images/app-logo.png")} alt="Logo" />
			</div>
			<div className="homescreen-title">
				<h1>Datamatiker 3 Semester Startcode</h1>
			</div>
		</div>
	);
};

export default HomeScreen;
