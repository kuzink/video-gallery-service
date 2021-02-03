import React, {Component} from "react";
import {connect} from "react-redux";
import {setSearchText} from "../../actions/ItemsActions";
import HeaderComponent from "./HeaderComponent";

class HeaderContainer extends Component {

	handleSearchTextChange = (event) => this.props.setSearchText(event.target.value);

	render() {
		const {searchText} = this.props;
		return (
			<HeaderComponent searchText={searchText}
			                 handleSearchTextChange={this.handleSearchTextChange}/>
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
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderContainer);