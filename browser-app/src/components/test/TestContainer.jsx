import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Content from "./layout/content/Content";

export class TestContainer extends Component {

	state = {

	};

	componentDidMount() {

	}

	render() {
		return (
			<React.Fragment>
				<Header/>
				<Sidebar/>
				<Content/>
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