import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import ContentWithFooter from "./content/ContentWithFooter";

export class LayoutAwareContentWrapperContainer extends Component {

	state = {

	};

	componentDidMount() {

	}

	render() {
		const {children} = this.props;

		return (
			<React.Fragment>
				<Header/>
				<Sidebar/>
				<ContentWithFooter>
					{children}
				</ContentWithFooter>
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
)(LayoutAwareContentWrapperContainer);