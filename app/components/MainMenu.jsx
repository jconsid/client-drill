import React from "react";
import Client from "utils/Client";
import { Link } from "react-router";

export default class MainMenu extends React.Component {
	render() {
		var c = new Client({model:'demas', template:'asdf'});
		console.log('client', c);
		c.render();
		return <div>
			<nav className="mmenu">
				<ul>
					<li><Link to="overview">Översikt</Link></li>
					<li><Link to="statistics">Statistik</Link></li>	
					<li><Link to="about">Om</Link></li>
				</ul>
			</nav>
		</div>;
	}
}
