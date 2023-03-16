import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";
import sidebarConstants from "./SidebarConstants";
import {connect} from "react-redux";
import {
	setActiveItemId,
	resetActiveItemId,
	retrieveVideoCategories,
	resetVideoCategories
} from "../../../../actions/SidebarActions";

export class Sidebar extends Component {

	componentDidMount() {
		this.props.retrieveVideoCategories();
	}

	componentWillUnmount() {
		this.props.resetActiveItemId();
		this.props.resetVideoCategories();
	}

	render() {
		const {activeItemId, videoCategories} = this.props;
		const sidebarMenuItems = sidebarConstants.SIDEBAR_MENU_ITEMS.map(item => {
			if (item.type === sidebarConstants.VIDEO_CATEGORIES) {
				return {
					...item,
					children: videoCategories
				};
			} else {
				return item;
			}
		});

		return (
			<div className="test-sidebar">
				<ul className="side-nav">
					{sidebarMenuItems.map((item, index) =>
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
		activeItemId: state.sidebar.activeItemId,
		videoCategories: state.sidebar.videoCategories
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setActiveItemId: (activeItemId) => {
			dispatch(setActiveItemId(activeItemId));
		},
		resetActiveItemId: () => {
			dispatch(resetActiveItemId());
		},
		retrieveVideoCategories: () => {
			dispatch(retrieveVideoCategories());
		},
		resetVideoCategories: () => {
			dispatch(resetVideoCategories());
		},
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);