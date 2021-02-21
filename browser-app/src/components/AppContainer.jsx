import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {retrieveSlides} from "../actions/SlidesActions";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import LandingContainer from "./routes/LandingContainer";
import ItemsContainer from "./routes/ItemsContainer";
import PageNotFoundComponent from "./routes/PageNotFoundComponent";

class AppContainer extends Component {

	componentDidMount() {
		this.props.retrieveSlides();
	}

	render() {
		return (
			<Router>
				<React.Fragment>
					<LoadingSpinner/>
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

const mapDispatchToProps = dispatch => {
	return {
		retrieveSlides: () => {
			dispatch(retrieveSlides());
		}
	}
};

export default connect(
	null,
	mapDispatchToProps
)(AppContainer);