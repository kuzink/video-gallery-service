import React, {Component} from "react";
import {connect} from "react-redux";
import {retrieveItems, setItemName, resetItemName} from "../../actions/ItemsActions";
import ItemsComponent from "./ItemsComponent";
import ItemDetailsComponent from "./ItemDetailsComponent";
import PaginationWrapperComponent from "../pagination/PaginationWrapperComponent";

export class ItemsContainer extends Component {

	componentDidMount() {
		this.props.retrieveItems();
	}

	handleOnItemSelect = (itemName) => this.props.setItemName(itemName);

	handleCancel = () => this.props.resetItemName();

	filterItems = (items, searchText) => {
		const search = searchText.trim().toLowerCase();
		return search === '' ? items : items.filter(item => item.name.toLowerCase().includes(search));
	};

	render() {
		const {items, page, itemName, searchText, retrieveItems} = this.props;
		return (
			<div className="custom-offset">
				<PaginationWrapperComponent page={page}
				                            getItems={retrieveItems}>
					<ItemsComponent items={this.filterItems(items, searchText)}
					                handleOnItemSelect={this.handleOnItemSelect}/>
				</PaginationWrapperComponent>

				<ItemDetailsComponent itemName={itemName}
				                      handleCancel={this.handleCancel}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.items,
		page: state.items.page,
		itemName: state.items.itemName,
		searchText: state.items.searchText
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveItems: (size, page) => {
			dispatch(retrieveItems(size, page));
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
