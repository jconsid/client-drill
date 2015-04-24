import React from "react";
import { RouteHandler } from "react-router";
import MainMenu from "components/MainMenu";
import { Todo as TodoActions } from "actions";

import styles from "./style.css";

export default class Application extends React.Component {
	static getProps(stores, params) {
		var transition = stores.Router.getItem("transition");
		return {
			loading: !!transition
		};
	}
	render() {
		var { loading } = this.props;
		return <div className={styles.this + (loading ? " " + styles.loading : "")}>
			<MainMenu />
			<div className={styles.loadingElement}>loading...</div>
			<h1>Välkommen att träna...</h1>
			
			<RouteHandler />
		</div>;
	}	
	update() {
		TodoActions.update();
	}
}

Application.contextTypes = {
	stores: React.PropTypes.object
};
