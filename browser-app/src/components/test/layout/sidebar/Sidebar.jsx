import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";
import {connect} from "react-redux";
import {
	setActiveItemId,
	resetActiveItemId,
	retrieveSidebarMenu,
	resetSidebarMenu
} from "../../../../actions/SidebarActions";

export class Sidebar extends Component {

	componentDidMount() {
		this.props.retrieveSidebarMenu();
	}

	componentWillUnmount() {
		this.props.resetSidebarMenu();
		this.props.resetActiveItemId();
	}

	render() {
		const {sidebarMenu, activeItemId} = this.props;

		return (
			<div className="test-sidebar">
				<ul className="side-nav">
					{sidebarMenu.map((item, index) =>
					<SidebarItem key={index}
					             item={item}
					             activeItemId={activeItemId}
					             setActiveItemId={this.props.setActiveItemId}/>)
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		sidebarMenu: state.sidebar.sidebarMenu,
		activeItemId: state.sidebar.activeItemId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveSidebarMenu: () => {
			dispatch(retrieveSidebarMenu());
		},
		resetSidebarMenu: () => {
			dispatch(resetSidebarMenu());
		},
		setActiveItemId: (activeItemId) => {
			dispatch(setActiveItemId(activeItemId));
		},
		resetActiveItemId: () => {
			dispatch(resetActiveItemId());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);