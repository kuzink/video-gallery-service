import React, {Component} from 'react';
import {connect} from "react-redux";
import ModalAlertContainer from "./modalalert/ModalAlertContainer";
import {HeaderComponent} from "../components/HeaderComponent";
import ItemsContainer from "../components/item/ItemsContainer";

class AppContainer extends Component {

	render() {
		return (
			<React.Fragment>
				<ModalAlertContainer/>
				<HeaderComponent/>
				<ItemsContainer/>
			</React.Fragment>
		);
	};
}

export default connect()(AppContainer);