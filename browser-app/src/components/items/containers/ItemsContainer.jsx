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
	resetSearchText,
	setIsGridView
} from "../../../actions/ItemsActions";
import BackButtonComponent from "../components/BackButtonComponent";
import ItemsComponent from "../components/ItemsComponent";
import ItemDetailsComponent from "../components/ItemDetailsComponent";
import ItemsPaginationWrapperComponent from "../components/ItemsPaginationWrapperComponent";
import ScrollTopButtonComponent from "../components/ScrollTopButtonComponent";
import ModalAlertContainer from "../../utilities/modalalert/ModalAlertContainer";
import Spinner from "../../utilities/spinner/Spinner";
import RequestSpinner from "../../utilities/spinner/RequestSpinner";

export class ItemsContainer extends Component {

	state = {
		isLoading: true
	};

	componentDidMount() {
		this.props.retrieveItems();

		setTimeout(() => {
			this.setState({
				...this.state,
				isLoading: false
			})
		}, 1200);
	}

	componentWillUnmount() {
		this.props.resetItems();
		this.props.resetSortBy();
		this.props.resetSearchText();
		this.props.setIsGridView(true);
	}

	handleOnItemSelect = (itemName) => this.props.setItemName(itemName);

	handleSortByChange = (sortBy) => this.props.setSortBy(sortBy);

	handleSearchTextChange = (event) => this.props.setSearchText(event.target.value);

	handleIsGridViewChange = (isGridView) => this.props.setIsGridView(isGridView);

	handleCancel = () => this.props.resetItemName();

	render() {
		const {items, page, itemName, searchText, sortBy, isGridView, retrieveItems} = this.props;
		const {isLoading} = this.state;
		// const isLoading = true;

		return (
			<React.Fragment>

				<ModalAlertContainer/>

				<Spinner isLoading={isLoading}/>

				<div className="test-header">
					<BackButtonComponent classNames="ml-3"/>
				</div>

				<div className="test-sidebar">
					<p>Sidebar</p>
				</div>

				<div className="test-content-outer">

					{!isLoading &&
					<React.Fragment>
						<RequestSpinner/>

						{/*<BackButtonComponent classNames="back-button-fixed-top ml-3 mt-3"/>*/}

						<ItemsPaginationWrapperComponent page={page}
						                                 sortBy={sortBy}
						                                 sortByChange={this.handleSortByChange}
						                                 searchText={searchText}
						                                 searchTextChange={this.handleSearchTextChange}
						                                 isGridView={isGridView}
						                                 isGridViewChange={this.handleIsGridViewChange}
						                                 getItems={retrieveItems}>
							<ItemsComponent items={items}
							                isGridView={isGridView}
							                handleOnItemSelect={this.handleOnItemSelect}/>
						</ItemsPaginationWrapperComponent>

						<ScrollTopButtonComponent/>

						<ItemDetailsComponent itemName={itemName}
						                      handleCancel={this.handleCancel}/>
					</React.Fragment>
					}

				</div>






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
		sortBy: state.items.sortBy,
		isGridView: state.items.isGridView
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
		},
		setIsGridView: (isGridView) => {
			dispatch(setIsGridView(isGridView));
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ItemsContainer);
