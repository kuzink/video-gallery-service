import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilm} from "@fortawesome/free-solid-svg-icons/index";

const HeaderComponent = (props) => {

	const {searchText, handleSearchTextChange} = props;

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
					       onChange={handleSearchTextChange}/>
				</div>

			</div>
		</nav>
	);
};

export default HeaderComponent;