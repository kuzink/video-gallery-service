import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoadingSpinnerComponent from "./spinner/LoadingSpinnerComponent";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import LandingContainer from "./routes/LandingContainer";
import ItemsContainer from "./routes/ItemsContainer";
import PageNotFoundComponent from "./routes/PageNotFoundComponent";
import TestWithSpinner from "./routes/TestWithSpinner";

class AppContainer extends Component {

	render() {
		return (
			<Router>
				{/*<LoadingSpinnerComponent/>*/}
				<ModalAlertContainer/>
				<Switch>
					<Route exact path="/" component={LandingContainer}/>
					<Route exact path="/items" component={ItemsContainer}/>
					<Route exact path="/spinner" component={TestWithSpinner}/>
					<Route component={PageNotFoundComponent}/>
				</Switch>
			</Router>
		);
	};
}

export default AppContainer;