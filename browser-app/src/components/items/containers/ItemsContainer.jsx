import React, {Component} from "react";
import {connect} from "react-redux";
import {
	retrieveItems,
	resetItems,
	setSelectedItem,
	resetSelectedItem,
	setSortBy,
	resetSortBy,
	setIsGridView
} from "../../../actions/ItemsActions";
import ItemsComponent from "../components/ItemsComponent";
import ItemDetailsComponent from "../components/ItemDetailsComponent";
import ItemsPaginationWrapperComponent from "../components/ItemsPaginationWrapperComponent";
import ModalAlertContainer from "../../utilities/modalalert/ModalAlertContainer";
import Spinner from "../../utilities/spinner/Spinner";
import RequestSpinner from "../../utilities/spinner/RequestSpinner"
import {LayoutAwareContentWrapperContainer} from "../../layout/LayoutAwareContentWrapperContainer";

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
		}, 1000);
	}

	componentDidUpdate(prevProps) {
		const {category} = this.props;
		if (category !== prevProps.category) {
			const {page, sortBy, searchText} = this.props;
			this.props.retrieveItems(category, page.size, page.page, sortBy, searchText);
		}
	}

	componentWillUnmount() {
		this.props.resetItems();
		this.props.resetSortBy();
		this.props.setIsGridView(true);
	}

	handleOnItemSelect = (selectedItem) => this.props.setSelectedItem(selectedItem);

	handleSortByChange = (sortBy) => this.props.setSortBy(sortBy);

	handleIsGridViewChange = (isGridView) => this.props.setIsGridView(isGridView);

	handleCancel = () => this.props.resetSelectedItem();

	render() {
		const {items, category, page, selectedItem, searchText, sortBy, isGridView, retrieveItems} = this.props;
		const {isLoading} = this.state;
		// const isLoading = true;

		return (
			<React.Fragment>

				<ModalAlertContainer/>

				<Spinner isLoading={isLoading}/>

				<LayoutAwareContentWrapperContainer>
					{!isLoading &&
					<React.Fragment>
						<RequestSpinner/>

						<ItemsPaginationWrapperComponent category={category}
														 page={page}
						                                 sortBy={sortBy}
						                                 sortByChange={this.handleSortByChange}
						                                 searchText={searchText}
						                                 isGridView={isGridView}
						                                 isGridViewChange={this.handleIsGridViewChange}
						                                 getItems={retrieveItems}>
							<ItemsComponent items={items}
							                isGridView={isGridView}
							                handleOnItemSelect={this.handleOnItemSelect}/>
						</ItemsPaginationWrapperComponent>

						<ItemDetailsComponent selectedItem={selectedItem}
						                      handleCancel={this.handleCancel}/>
					</React.Fragment>
					}
				</LayoutAwareContentWrapperContainer>

			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.items.items,
		page: state.items.page,
		selectedItem: state.items.selectedItem,
		sortBy: state.items.sortBy,
		isGridView: state.items.isGridView,
		category: state.items.category,
		searchText: state.header.searchText
	};
};

const mapDispatchToProps = dispatch => {
	return {
		retrieveItems: (category, size, page, sortBy, search) => {
			dispatch(retrieveItems(category, size, page, sortBy, search));
		},
		resetItems: () => {
			dispatch(resetItems());
		},
		setSelectedItem: (selectedItem) => {
			dispatch(setSelectedItem(selectedItem));
		},
		resetSelectedItem: () => {
			dispatch(resetSelectedItem());
		},
		setSortBy: (sortBy) => {
			dispatch(setSortBy(sortBy));
		},
		resetSortBy: () => {
			dispatch(resetSortBy());
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
