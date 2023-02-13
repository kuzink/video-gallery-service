import React, {Component} from 'react';
import {connect} from "react-redux";

export class TestContainer extends Component {

	state = {

	};

	componentDidMount() {

	}

	render() {
		return (
			<React.Fragment>
				<p>Some jsx here...</p>
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