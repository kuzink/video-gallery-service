import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingContainer from "./landing/containers/LandingContainer";
import ItemsContainer from "./items/containers/ItemsContainer";
import NotFoundComponent from "./notfound/NotFoundComponent";
import TestContainer from "./test/TestContainer";

class AppContainer extends Component {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={LandingContainer}/>
					<Route exact path="/videos" component={ItemsContainer}/>
					<Route exact path="/test" component={TestContainer}/>
					<Route exact path="*" component={NotFoundComponent}/>
				</Switch>
			</Router>
		);
	};
}

export default AppContainer;