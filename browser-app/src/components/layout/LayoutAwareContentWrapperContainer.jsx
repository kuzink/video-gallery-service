import React, {Component} from 'react';
import {connect} from "react-redux";
import HeaderContainer from "./header/HeaderContainer";
import SidebarContainer from "./sidebar/SidebarContainer";
import ContentWithFooterComponent from "./content/ContentWithFooterComponent";

export class LayoutAwareContentWrapperContainer extends Component {

	state = {

	};

	componentDidMount() {

	}

	render() {
		const {children} = this.props;

		return (
			<React.Fragment>
				<HeaderContainer/>
				<SidebarContainer/>
				<ContentWithFooterComponent>
					{children}
				</ContentWithFooterComponent>
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