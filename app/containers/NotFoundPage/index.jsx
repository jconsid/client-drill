import React from "react";

export default class NotFoundPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div>
			<h2>Ledsen, något gick fel</h2>
			<p>Sidan kunde inte laddas</p>
		</div>;
	}
}
