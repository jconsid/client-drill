import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import Application  from "./routeHandlers/Application";
import OverviewPage from "./routeHandlers/OverviewPage";
import AboutPage   from "./routeHandlers/AboutPage";
import StatPage     from "./routeHandlers/StatPage";
import NotFoundPage from "./routeHandlers/NotFoundPage";

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="overview" path="/overview" handler={OverviewPage} />
		<Route name="about" path="/about" handler={AboutPage} />
		<Route name="statistics" path="/statistics" handler={StatPage} />
		<DefaultRoute handler={OverviewPage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);
