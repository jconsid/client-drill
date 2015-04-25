import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import Application  from "./routeHandlers/Application";
import OverviewPage from "./routeHandlers/OverviewPage";
import AboutPage    from "./routeHandlers/AboutPage";
import StatPage     from "./routeHandlers/StatPage";
import UserStatPage from "./routeHandlers/UserStatPage";

import NotFoundPage from "./routeHandlers/NotFoundPage";

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="overview" path="/overview" handler={OverviewPage} />
		<Route name="about" path="/about" handler={AboutPage} />
		<Route name="allstatistics" path="/allstatistics" handler={StatPage} />

		<Route name="userstatisticsroot" path="userstatistics">
	      <Route name="userstatistics" path=":user" handler={UserStatPage} />
	      <NotFoundRoute handler={NotFoundPage}/>
	    </Route>

		<DefaultRoute handler={OverviewPage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);

/*
<Route name="todo" path="/todo" handler={TodoPage} >
			<Route name="todolist" path="list/:list" handler={TodoListPage} />
			<Route name="todoitem" path="item/:item" handler={TodoItemPage} />
		</Route>

*/