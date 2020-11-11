import React, {Component} from 'react';
import {connect} from "react-redux";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import HeaderContainer from "./layout/HeaderContainer";
import ItemsContainer from "../components/item/ItemsContainer";
import LoadingSpinner from "../components/spinner/LoadingSpinner";

class AppContainer extends Component {

	render() {
		return (
			<React.Fragment>
				<LoadingSpinner/>
				<ModalAlertContainer/>
				<HeaderContainer/>
				<ItemsContainer/>
			</React.Fragment>
		);
	};
}

export default connect()(AppContainer);