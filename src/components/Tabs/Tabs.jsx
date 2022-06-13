import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ tabButtons, tabContent }) => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<>
			<div className="container-tabs">
				<div className="bloc-tabs">
					{tabButtons.tabs.map((tab) => {
						return (
							<button key={tab.state} className={toggleState === tab.state ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(tab.state)}>
								<p className="tabs-btn-text">{tab.line1}</p>
								<p className="tabs-btn-text">{tab.line2}</p>
							</button>
						);
					})}
				</div>

				<div className="content-tabs">
					{tabContent.content.map((content) => {
						return (
							<div key={content.state} className={toggleState === content.state ? "content-tab active-content-tab" : "content-tab"}>
								<content.comp data={content.data} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Tabs;
