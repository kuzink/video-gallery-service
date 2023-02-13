import React, {Component} from 'react';
import { connect } from 'react-redux';
import ModalAlertComponent from './ModalAlertComponent';
import {resetAlerts} from "../../../actions/AlertActions";

export class ModalAlertContainer extends Component {

	render(){
		const {
			onHideAlertPanel,
			alertText,
			alertVisible,
			alertStyle
		} = this.props;

		return(
			<ModalAlertComponent onHideAlertPanel={onHideAlertPanel}
			                     alertText={alertText}
			                     alertVisible={alertVisible}
			                     alertStyle={alertStyle}/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onHideAlertPanel: () => {
			dispatch(resetAlerts())
		}
	};
};

const mapStateToProps = (state) => {
	const {message, isError} = state.alert;
	const alertVisible = message !== '';
	const alertStyle = (isError === false && alertVisible) ? 'success' : 'danger';

	return {
		alertText: message,
		alertVisible: alertVisible,
		alertStyle: alertStyle
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ModalAlertContainer);
