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

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_ITEMS]: setItems,
	[constants.REDUX_STORE_EVENTS.RESET_ITEMS]: resetItems,
	[constants.REDUX_STORE_EVENTS.SET_ITEM_NAME]: setItemName,
	[constants.REDUX_STORE_EVENTS.RESET_ITEM_NAME]: resetItemName,
	[constants.REDUX_STORE_EVENTS.SET_SEARCH_TEXT]: setSearchText
};

export default (state = initialItems, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};