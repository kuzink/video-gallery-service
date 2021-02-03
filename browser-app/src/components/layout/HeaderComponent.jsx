import React from "react";
import {Link} from "react-router-dom";
import {faFilm} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const HeaderComponent = (props) => {

	const {searchText, handleSearchTextChange} = props;

	return (
		<nav className="navbar fixed-top navbar-dark bg-dark">

			<div className="navbar-brand d-flex align-items-center">
				<Link className="custom-logo" to="/">
					<FontAwesomeIcon icon={faFilm} className="mr-2"/>
					<strong>Video Gallery</strong>
				</Link>
			</div>

			<div className="form-inline my-0">
				<input className="form-control mb-2 mb-sm-0"
				       type="text"
				       placeholder="Search"
				       value={searchText}
				       onChange={handleSearchTextChange}/>
			</div>

		</nav>
	);
};

export default HeaderComponent;