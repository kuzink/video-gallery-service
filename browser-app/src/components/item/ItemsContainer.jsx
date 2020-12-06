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

	handleOnItemSelect = (itemName) => this.props.setItemName(itemName);

	handleCancel = () => this.props.resetItemName();

	filterItems = (items, searchText) => {
		const search = searchText.trim().toLowerCase();
		return search === '' ? items : items.filter(item => item.name.toLowerCase().includes(search));
	};

	render() {
		const {items, itemName, searchText} = this.props;
		return (
			<div>
				<ItemsComponent items={this.filterItems(items, searchText)}
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
		itemName: state.items.itemName,
		searchText: state.items.searchText
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
