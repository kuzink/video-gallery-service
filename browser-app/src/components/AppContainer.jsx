import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoadingSpinnerComponent from "./spinner/LoadingSpinnerComponent";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import LandingContainer from "./routes/LandingContainer";
import ItemsContainer from "./routes/ItemsContainer";
import PageNotFoundComponent from "./routes/PageNotFoundComponent";

class AppContainer extends Component {

	render() {
		return (
			<Router>
				<React.Fragment>
					<LoadingSpinnerComponent/>
					<ModalAlertContainer/>
					<Switch>
						<Route exact path="/" component={LandingContainer}/>
						<Route exact path="/items" component={ItemsContainer}/>
						<Route component={PageNotFoundComponent}/>
					</Switch>
				</React.Fragment>
			</Router>
		);
	};
}

export default AppContainer;