import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilm} from "@fortawesome/free-solid-svg-icons/index";

const HeaderComponent = (props) => {

	const {searchText, handleSearchTextChange, handleLoadClick, handleCleanClick} = props;

	return (
		<nav className="navbar fixed-top navbar-dark bg-dark">

			<div className="navbar-brand d-flex align-items-center">
				<FontAwesomeIcon icon={faFilm} className="mr-2"/>
				<strong>Video Gallery</strong>
			</div>

			<div className="form-inline my-0">
				<input className="form-control mb-2 mb-sm-0"
				       type="text"
				       placeholder="Search"
				       value={searchText}
				       onChange={handleSearchTextChange}/>
				<button className="btn btn-outline-success ml-sm-2" onClick={handleLoadClick}>Load data</button>
				<button className="btn btn-outline-danger ml-2" onClick={handleCleanClick}>Clean data</button>
			</div>

		</nav>
	);
};

export default HeaderComponent;