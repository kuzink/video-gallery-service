import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import ContentWithFooter from "./layout/content/ContentWithFooter";

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
				<ContentWithFooter/>
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