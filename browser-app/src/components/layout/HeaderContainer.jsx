import React, {Component} from "react";
import {setSearchText} from "../../actions/ItemsActions";
import {connect} from "react-redux";
import HeaderComponent from "./HeaderComponent";
import {retrieveItems, resetItems} from "../../actions/ItemsActions";

class HeaderContainer extends Component {

	handleSearchTextChange = (event) => this.props.setSearchText(event.target.value);

	handleLoadClick = () => this.props.retrieveItems();

	handleCleanClick = () => this.props.resetItems();

	render() {
		const {searchText} = this.props;
		return (
			<HeaderComponent searchText={searchText}
			                 handleSearchTextChange={this.handleSearchTextChange}
			                 handleLoadClick={this.handleLoadClick}
			                 handleCleanClick={this.handleCleanClick}/>
		);
	}
}

const mapStateToProps = state => {
	return {
		searchText: state.items.searchText
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setSearchText: (searchText) => {
			dispatch(setSearchText(searchText));
		},
		retrieveItems: () => {
			dispatch(retrieveItems());
		},
		resetItems: () => {
			dispatch(resetItems());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);