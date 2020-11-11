import React, {Component} from "react";
import {connect} from "react-redux";

class LoadingSpinner extends Component {

	render() {
		const {loading} = this.props;
		return (
			<div>
				{loading &&
				<div className="custom-spinner">
					<div className="spinner-border text-primary">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
				}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.spinner.loading
	};
};

export default connect(
	mapStateToProps,
	null
)(LoadingSpinner);