import React from 'react';
import {Link} from "react-router-dom";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LandingComponent = () => (
	<div className="custom-landing-wrapper d-flex align-items-end">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="text-center mb-5 pb-5">
						<Link className="btn btn-danger mb-5 px-4" to="/items">
							Show me videos<FontAwesomeIcon icon={faAngleRight} className="ml-2"/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default LandingComponent;
