import React from "react";
import UserStatPage from "containers/UserStatPage";
import Client from "utils/Client";

export default class OverviewPage extends React.Component {
	static getProps() {
		return {
			userName: new Client().getUser()
		};
	}
	render() {
		return <div>
			<h2>Översikt för {this.props.userName}</h2>
			<UserStatPage/>
		</div>;
	}
}
