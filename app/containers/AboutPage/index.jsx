import React from "react";
import styles from "./style.css";

export default class AboutPage extends React.Component {
	static getProps() {
		return {};
	}
	render() {
		var about = { __html: require("./../../../README.md") };
		return <div class="kalle">
			<div className={styles.this} dangerouslySetInnerHTML={about}></div>
			<p>&copy; 2015 Consid</p>
		</div>;
	}
}
