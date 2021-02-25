import React, {Component} from 'react';
import {connect} from "react-redux";
import {retrieveSlides} from "../../actions/SlidesActions";
import LandingSliderComponent from "../slider/LandingSliderComponent";
import ShowButtonComponent from "../layout/ShowButtonComponent";

export class LandingContainer extends Component {

	componentDidMount() {
		const {slides} = this.props;
		if (!slides.length) {
			this.props.retrieveSlides();
		}
	}

	render() {
		const {slides} = this.props;
		return (
			<div className="custom-landing-wrapper">
				<LandingSliderComponent slides={slides}/>
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
