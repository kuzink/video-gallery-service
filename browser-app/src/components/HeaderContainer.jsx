import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import {setSearchText} from "../actions/ItemsActions";
import {connect} from "react-redux";

class HeaderContainer extends Component {

	handleSearchTextChange = (event) => this.props.setSearchText(event.target.value);

	render() {
		const {searchText} = this.props;
		return (
			<nav className="navbar fixed-top navbar-dark bg-dark">
				<div className="container d-flex justify-content-between">

					<div className="navbar-brand d-flex align-items-center">
						<FontAwesomeIcon icon={faFilm} className="mr-2"/>
						<strong>Video Gallery</strong>
					</div>

					<div className="form-inline my-0">
						<input className="form-control"
						       type="text"
						       placeholder="Search"
						       value={searchText}
						       onChange={this.handleSearchTextChange}/>
					</div>

				</div>
			</nav>
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