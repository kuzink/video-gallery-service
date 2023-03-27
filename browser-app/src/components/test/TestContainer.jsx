import React, {Component} from 'react';
import {connect} from "react-redux";
import TestComponent from "./TestComponent";

export class TestContainer extends Component {

	state = {

	};

	componentDidMount() {

	}

	render() {
		return (
			<React.Fragment>
				<TestComponent/>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {

	};
};

const mapDispatchToProps = dispatch => {
	return {

	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestContainer);