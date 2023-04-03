import React, {Component} from 'react';
import {connect} from "react-redux";
import constants from "../../../constants/Constants";
import HeaderComponent from "./HeaderComponent";
import {resetSearchText, setSearchText} from "../../../actions/HeaderActions";
import {retrieveItems} from "../../../actions/ItemsActions";

export class HeaderContainer extends Component {

	componentWillUnmount() {
		this.props.resetSearchText();
	}

	handleSearchTextChange = (event) => {
		this.props.setSearchText(event.target.value);
	};

	handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			event.preventDefault();
			this.handleSearchButtonClick();
		}
	};

	handleSearchButtonClick = () => {
		const search = this.props.searchText.trim().toLowerCase();
		const {category} = this.props;
		this.props.retrieveItems(
			category,
			constants.PAGE_SIZE_DEFAULT_VALUE,
			constants.PAGE_NUMBER_DEFAULT_VALUE,
			constants.SORT_CRITERIA_DEFAULT_VALUE,
			search
		);
	};

    render() {
	    const {searchText} = this.props;

	    return (
	    	<HeaderComponent searchText={searchText}
		                     handleKeyPress={this.handleKeyPress}
		                     handleSearchTextChange={this.handleSearchTextChange}
		                     handleSearchButtonClick={this.handleSearchButtonClick}/>
	    )
    }
}

const mapStateToProps = state => {
	return {
		searchText: state.header.searchText,
		category: state.items.category
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setSearchText: (searchText) => {
			dispatch(setSearchText(searchText));
		},
		resetSearchText: () => {
			dispatch(resetSearchText());
		},
		retrieveItems: (category, size, page, sortBy, search) => {
			dispatch(retrieveItems(category, size, page, sortBy, search));
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);