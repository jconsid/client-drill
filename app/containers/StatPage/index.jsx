import React from "react";
import Client from "utils/Client";
import { Link } from "react-router";

export default class StatPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		console.log('logged in user', new Client().getUser());
		
		return <div>
			<h2>Statistik</h2>
			<p>kalles länk
				<Link to="userstatistics" params={{user: "kalle"}}>Kalles statistik</Link>
			</p>
			
		</div>;
	}
}
