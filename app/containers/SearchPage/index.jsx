import React from "react";

export default class SearchPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		return <div>
			<h2>Sök</h2>
			<p><input type="search" /></p>
		</div>;
	}
}
