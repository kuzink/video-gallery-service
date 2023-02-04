import React, {Component} from 'react';
import withRequestStatusSpinner from "../spinner/RequestStatusSpinner";
import RequestStatus from "../../constants/RequestStatus";

export class LandingContainer extends Component {

	render() {
		return (
			<div >
				{withRequestStatusSpinner(RequestStatus.SUCCESS)(
					<p>Component with request spinner here...</p>
				)}

			</div>
		)
	}
}

export default LandingContainer;
