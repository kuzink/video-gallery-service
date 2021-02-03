import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import HeaderContainer from "./layout/HeaderContainer";
import ItemsContainer from "../components/item/ItemsContainer";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import FooterComponent from "./layout/FooterComponent";
import LandingComponent from "../components/routes/LandingComponent";
import PageNotFoundComponent from "../components/routes/PageNotFoundComponent";

class AppContainer extends Component {

	render() {
		return (
			<Router>
				<React.Fragment>
					<LoadingSpinner/>
					<ModalAlertContainer/>
					<HeaderContainer/>
					<Switch>
						<Route exact path="/" component={LandingComponent}/>
						<Route exact path="/items" component={ItemsContainer}/>
						<Route component={PageNotFoundComponent}/>
					</Switch>
					<FooterComponent/>
				</React.Fragment>
			</Router>
		);
	};
}

export default connect()(AppContainer);