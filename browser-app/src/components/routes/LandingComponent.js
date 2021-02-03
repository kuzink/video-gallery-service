import React from 'react';
import {Link} from "react-router-dom";
import {faFilm, faAngleRight} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LandingComponent = () => (
	<div className="custom-landing-wrapper d-flex align-items-center">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="text-center pb-5">
						<Link className="btn btn-secondary" to="/items">
							<FontAwesomeIcon icon={faFilm} className="mr-2"/>
							Show me videos
							<FontAwesomeIcon icon={faAngleRight} className="ml-2"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default LandingComponent;
