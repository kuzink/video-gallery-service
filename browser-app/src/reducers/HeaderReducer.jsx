import {initialHeader} from './InitialState';
import constants from '../constants/Constants';

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

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_HEADER_SEARCH_TEXT]: setSearchText,
	[constants.REDUX_STORE_EVENTS.RESET_HEADER_SEARCH_TEXT]: resetSearchText
};

export default (state = initialHeader, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};