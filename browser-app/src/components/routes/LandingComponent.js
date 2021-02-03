import React from 'react';
import {Link} from "react-router-dom";

const LandingComponent = () => (
	<div className="custom-offset">
		<div className="custom-landing-wrapper d-flex align-items-center">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="text-center pb-5">
							<Link className="btn btn-lg btn-dark" to="/items">Show me videos!</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default LandingComponent;
