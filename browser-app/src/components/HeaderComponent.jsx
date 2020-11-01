import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

export const HeaderComponent = () => (
	<nav className="navbar navbar-dark bg-dark">
		<div className="container d-flex justify-content-between">

			<div className="navbar-brand d-flex align-items-center">
				<FontAwesomeIcon icon={faFilm} className="mr-2"/>
				<strong>Video Gallery</strong>
			</div>

			<div className="form-inline my-0">
				<input className="form-control" type="text" placeholder="Search"/>
			</div>

		</div>
	</nav>
);
