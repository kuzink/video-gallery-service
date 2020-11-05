import React, {Component} from "react";
import {connect} from "react-redux";
import {
	retrieveItems,
	setItemName,
	resetItemName
} from "../../actions/ItemsActions";
import ItemsComponent from "./ItemsComponent";
import ItemDetailsComponent from "./ItemDetailsComponent";

export class ItemsContainer extends Component {

	componentDidMount() {
		this.props.retrieveItems();
	}

	handleOnItemSelect = (itemName) => this.props.setItemName(itemName);

	handleCancel = () => this.props.resetItemName();

	render() {
		const {items, itemName} = this.props;
		return (
			<div>
				<ItemsComponent items={items}
				                handleOnItemSelect={this.handleOnItemSelect}/>

				<ItemDetailsComponent itemName={itemName}
				                      handleCancel={this.handleCancel}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.items,
		itemName: state.items.itemName
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveItems: () => {
			dispatch(retrieveItems());
		},
		setItemName: (itemName) => {
			dispatch(setItemName(itemName));
		},
		resetItemName: () => {
			dispatch(resetItemName());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsContainer);
