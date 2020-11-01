import React, {Component} from "react";
import {connect} from "react-redux";
import {
	retrieveItems,
	retrieveItemDetails,
	resetItemDetails
} from "../../actions/ItemsActions";
import ItemsComponent from "./ItemsComponent";
import ItemDetailsComponent from "./ItemDetailsComponent";

export class ItemsContainer extends Component {

	componentDidMount() {
		this.props.retrieveItems();
	}

	handleOnItemSelect = (itemId) => this.props.retrieveItemDetails(itemId);

	handleCancel = () => this.props.resetItemDetails();

	render() {
		const {items, itemDetails} = this.props;
		return (
			<div>
				<ItemsComponent items={items}
				                handleOnItemSelect={this.handleOnItemSelect}/>

				<ItemDetailsComponent itemDetails={itemDetails}
				                      handleCancel={this.handleCancel}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.items,
		itemDetails: state.items.itemDetails
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveItems: () => {
			dispatch(retrieveItems());
		},
		retrieveItemDetails: (itemId) => {
			dispatch(retrieveItemDetails(itemId));
		},
		resetItemDetails: () => {
			dispatch(resetItemDetails());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsContainer);
