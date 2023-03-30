import React, {Component} from 'react';
import {connect} from "react-redux";
import {retrieveSlides} from "../../../actions/SlidesActions";
import LandingSliderComponent from "../components/LandingSliderComponent";
import ShowButtonComponent from "../components/ShowButtonComponent";
import ModalAlertContainer from "../../utilities/modalalert/ModalAlertContainer";
import Spinner from "../../utilities/spinner/Spinner";

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
		}, 1000);
	}

	render() {
		const {slides} = this.props;
		const {isLoading} = this.state;

		return (
			<React.Fragment>
				<ModalAlertContainer/>

				<Spinner isLoading={isLoading}/>

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
