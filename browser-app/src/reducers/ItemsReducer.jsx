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

export const setItemName = (state, action) => {
	return {
		...state,
		itemName: action.itemName
	}
};

export const resetItemName = (state) => {
	return {
		...state,
		itemName: ''
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
	[constants.REDUX_STORE_EVENTS.SET_ITEM_NAME]: setItemName,
	[constants.REDUX_STORE_EVENTS.RESET_ITEM_NAME]: resetItemName,
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