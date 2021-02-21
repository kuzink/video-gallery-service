import React, {Component} from 'react';
import {connect} from "react-redux";
import LandingSlider from "../slider/LandingSlider";
import ShowButtonComponent from "../layout/ShowButtonComponent";

export class LandingContainer extends Component {

	render() {
		const {slides} = this.props;
		return (
			<div className="custom-landing-wrapper">
				<LandingSlider slides={slides}/>
				<ShowButtonComponent/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		slides: state.slides.slides
	};
};

export default connect(
	mapStateToProps
)(LandingContainer);
