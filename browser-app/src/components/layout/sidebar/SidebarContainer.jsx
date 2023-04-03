import React, {Component} from 'react';
import SidebarItemComponent from "./SidebarItemComponent";
import {connect} from "react-redux";
import {
	setActiveItemId,
	resetActiveItemId,
	retrieveSidebarMenu,
	resetSidebarMenu
} from "../../../actions/SidebarActions";
import {resetCategory, setCategory} from "../../../actions/ItemsActions";
import {withRouter} from 'react-router-dom';

export class SidebarContainer extends Component {

	componentDidMount() {
		this.props.retrieveSidebarMenu();
	}

	componentWillUnmount() {
		this.props.resetSidebarMenu();
		this.props.resetActiveItemId();
		this.props.resetCategory();
	}

	handleSetActiveItemId = (activeItemId) => {
		this.setCategoryIfNeeded(activeItemId);
		this.props.setActiveItemId(activeItemId)
	};

	setCategoryIfNeeded = (activeItemId) => {
		const {sidebarMenu} = this.props;

		const categoryMenuItem = sidebarMenu.find(el => el.title === "Categories");

		if (categoryMenuItem) {
			const foundCategory = categoryMenuItem.children.find(el => el.id === activeItemId);
			if (foundCategory) {
				this.props.setCategory(foundCategory.title);
			} else {
				this.props.resetCategory();

				const pathToGo = sidebarMenu.find(el => el.id === activeItemId).path;
				this.props.history.push(pathToGo);
			}
		} else {
			const pathToGo = sidebarMenu.find(el => el.id === activeItemId).path;
			this.props.history.push(pathToGo);
		}
	};

	render() {
		const {sidebarMenu, activeItemId} = this.props;

		return (
			<div className="test-sidebar">
				<ul className="side-nav">
					{sidebarMenu.map((item, index) =>
					<SidebarItemComponent key={index}
					                      item={item}
					                      activeItemId={activeItemId}
					                      setActiveItemId={this.handleSetActiveItemId}/>)
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
		},
		setCategory: (category) => {
			dispatch(setCategory(category));
		},
		resetCategory: () => {
			dispatch(resetCategory());
		},
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(SidebarContainer));