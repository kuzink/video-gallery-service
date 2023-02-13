import React, {Component} from 'react';
import {connect} from "react-redux";
import {retrieveSlides} from "../../../actions/SlidesActions";
import LandingSliderComponent from "../components/LandingSliderComponent";
import ShowButtonComponent from "../components/ShowButtonComponent";
import ModalAlertContainer from "../../utilities/modalalert/ModalAlertContainer";
import Image from '../../../assets/100x100/23.gif';
import Spinner from "../../utilities/spinner/Spinner";

// Best loading gifs: 1 2 4 7 9 10 12 14 20 23 24 31 33 34 38 45 46 48 49 51 52 55 58 61 65 75 78 81 82

export class LandingContainer extends Component {

	state = {
		isLoading: true
	};

	componentDidMount() {
		this.props.retrieveSlides();

		setTimeout(() => {
			this.setState({
				...this.state,
				isLoading: false
			})
		}, 1500);
	}

	render() {
		const {slides} = this.props;
		const {isLoading} = this.state;
		// const isLoading = true;

		return (
			<React.Fragment>
				<ModalAlertContainer/>

				<Spinner isLoading={isLoading}
				         image={Image}/>

				{!isLoading &&
				<React.Fragment>
					<LandingSliderComponent slides={slides}/>
					<ShowButtonComponent/>
				</React.Fragment>
				}
			</React.Fragment>
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
