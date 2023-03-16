import {initialItems} from './InitialState';
import constants from '../constants/Constants';

export const setItems = (state, action) => {
	return {
		...state,
		items: action.items.items,
		page: action.items.page
	}
};

export const resetItems = (state) => {
	return {
		...state,
		items: [],
		page: {}
	}
};

export const setSelectedItem = (state, action) => {
	return {
		...state,
		selectedItem: action.selectedItem
	}
};

export const resetSelectedItem = (state) => {
	return {
		...state,
		selectedItem: null
	}
};

export const setSearchText = (state, action) => {
	return {
		...state,
		searchText: action.searchText
	}
};

export const resetSearchText = (state) => {
	return {
		...state,
		searchText: ''
	}
};

export const setSortBy = (state, action) => {
	return {
		...state,
		sortBy: action.sortBy
	}
};

export const resetSortBy = (state) => {
	return {
		...state,
		sortBy: ''
	}
};

export const setIsGridView = (state, action) => {
	return {
		...state,
		isGridView: action.isGridView
	}
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_ITEMS]: setItems,
	[constants.REDUX_STORE_EVENTS.RESET_ITEMS]: resetItems,
	[constants.REDUX_STORE_EVENTS.SET_SELECTED_ITEM]: setSelectedItem,
	[constants.REDUX_STORE_EVENTS.RESET_SELECTED_ITEM]: resetSelectedItem,
	[constants.REDUX_STORE_EVENTS.SET_SEARCH_TEXT]: setSearchText,
	[constants.REDUX_STORE_EVENTS.RESET_SEARCH_TEXT]: resetSearchText,
	[constants.REDUX_STORE_EVENTS.SET_SORT_BY]: setSortBy,
	[constants.REDUX_STORE_EVENTS.RESET_SORT_BY]: resetSortBy,
	[constants.REDUX_STORE_EVENTS.SET_IS_GRID_VIEW]: setIsGridView
};

export default (state = initialItems, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};