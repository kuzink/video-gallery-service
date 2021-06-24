import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";
import {trackPromise} from 'react-promise-tracker';

export const setItems = (items) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_ITEMS,
		items: items
	}
};

export const resetItems = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_ITEMS
	}
};

export const setItemName = (itemName) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_ITEM_NAME,
		itemName: itemName
	}
};

export const resetItemName = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_ITEM_NAME
	}
};

export const setSearchText = (searchText) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SEARCH_TEXT,
		searchText: searchText
	}
};

export const resetSearchText = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SEARCH_TEXT,
	}
};

export const setSortBy = (sortBy) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SORT_BY,
		sortBy: sortBy
	}
};

export const resetSortBy = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SORT_BY
	}
};

export const setIsGridView = (isGridView) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_IS_GRID_VIEW,
		isGridView: isGridView
	}
};

export const retrieveItems = (size = constants.PAGE_SIZE_DEFAULT_VALUE,
                              page = constants.PAGE_NUMBER_DEFAULT_VALUE,
							  sortCriteria = constants.SORT_CRITERIA_DEFAULT_VALUE,
                              search = constants.SEARCH__DEFAULT_VALUE) => {
	return (dispatch) => {
		trackPromise(
		    axios.get(`${constants.BASE_URL}/items?size=${size}&page=${page}&sortBy=${sortCriteria}&search=${search}`,
		        {headers: {'Content-Type': 'application/json'}})
		        .then(response => {
		            dispatch(setItems(response.data));
			        window.scrollTo(0, 0);
		        })
			    .catch(error => {
				    dispatch(setErrorMessage('ERROR: Items retrieval'));
				    dispatch(resetItems());
			    })
		);
	}
};

