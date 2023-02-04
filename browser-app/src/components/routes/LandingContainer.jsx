import React, {Component} from 'react';
import {connect} from "react-redux";
import {retrieveSlides} from "../../actions/SlidesActions";
import LandingSliderComponent from "../slider/LandingSliderComponent";
import ShowButtonComponent from "../layout/ShowButtonComponent";
import withRequestStatusSpinner from "../spinner/RequestStatusSpinner";
import RequestStatus from "../../constants/RequestStatus";

export class LandingContainer extends Component {

	componentDidMount() {
		const {slides} = this.props;
		if (!slides.length) {
			this.props.retrieveSlides();
		}
	}

	render() {
		const {retrieveSlidesRequestStatus, slides} = this.props;
		return (
			<React.Fragment>
				{withRequestStatusSpinner(retrieveSlidesRequestStatus)(
				<div className="custom-landing-wrapper">
					<LandingSliderComponent slides={slides}/>
					<ShowButtonComponent/>
				</div>
				)}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		retrieveSlidesRequestStatus: state.slides.retrieveSlidesRequest.status,
		slides: state.slides.slides
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveSlides: () => {
			dispatch(retrieveSlides());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LandingContainer);
