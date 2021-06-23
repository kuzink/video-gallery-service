import React, {Component} from "react";
import {connect} from "react-redux";
import {
	retrieveItems,
	resetItems,
	setItemName,
	resetItemName,
	setSortBy,
	resetSortBy,
	setSearchText,
	resetSearchText
} from "../../actions/ItemsActions";
import BackButtonComponent from "../layout/BackButtonComponent";
import ItemsComponent from "../item/ItemsComponent";
import ItemDetailsComponent from "../item/ItemDetailsComponent";
import PaginationWrapperComponent from "../pagination/PaginationWrapperComponent";

export class ItemsContainer extends Component {

	componentDidMount() {
		this.props.retrieveItems();
	}

	componentDidUpdate() {
		this.top.classList.add('custom-visible');
	}

	componentWillUnmount() {
		this.props.resetItems();
		this.props.resetSortBy();
		this.props.resetSearchText();
	}

	handleOnItemSelect = (itemName) => this.props.setItemName(itemName);

	handleSortByChange = (sortBy) => this.props.setSortBy(sortBy);

	handleSearchTextChange = (event) => this.props.setSearchText(event.target.value);

	handleCancel = () => this.props.resetItemName();

	render() {
		const {items, page, itemName, searchText, sortBy, retrieveItems} = this.props;
		return (
			<React.Fragment>
				<div className="custom-hidden" ref={top => { this.top = top; }}>
					<BackButtonComponent classNames="fixed-top ml-3 mt-3"/>
				</div>

				<PaginationWrapperComponent page={page}
				                            sortBy={sortBy}
				                            sortByChange={this.handleSortByChange}
				                            searchText={searchText}
				                            searchTextChange={this.handleSearchTextChange}
				                            getItems={retrieveItems}>
					<ItemsComponent items={items}
					                handleOnItemSelect={this.handleOnItemSelect}/>
				</PaginationWrapperComponent>

				<ItemDetailsComponent itemName={itemName}
				                      handleCancel={this.handleCancel}/>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.items,
		page: state.items.page,
		itemName: state.items.itemName,
		searchText: state.items.searchText,
		sortBy: state.items.sortBy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveItems: (size, page, sortBy, search) => {
			dispatch(retrieveItems(size, page, sortBy, search));
		},
		resetItems: () => {
			dispatch(resetItems());
		},
		setItemName: (itemName) => {
			dispatch(setItemName(itemName));
		},
		resetItemName: () => {
			dispatch(resetItemName());
		},
		setSortBy: (sortBy) => {
			dispatch(setSortBy(sortBy));
		},
		resetSortBy: () => {
			dispatch(resetSortBy());
		},
		setSearchText: (searchText) => {
			dispatch(setSearchText(searchText));
		},
		resetSearchText: () => {
			dispatch(resetSearchText());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsContainer);
