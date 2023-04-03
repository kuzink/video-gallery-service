import constants from '../constants/Constants';

export const setSearchText = (searchText) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_HEADER_SEARCH_TEXT,
		searchText: searchText
	}
};

export const resetSearchText = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_HEADER_SEARCH_TEXT,
	}
};
