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

export const retrieveItems = (size = constants.PAGE_SIZE_DEFAULT_VALUE, page = constants.PAGE_NUMBER_DEFAULT_VALUE) => {
	return (dispatch) => {
		trackPromise(
		    axios.get(`${constants.BASE_URL}/items?size=${size}&page=${page}`,
		        {headers: {'Content-Type': 'application/json'}})
		        .then(response => {
		            dispatch(setItems(response.data));
			        window.scrollTo(0, 0);
		        })
			    .catch(error => {
				    dispatch(setErrorMessage('ERROR: Items retrieval'));
			    })
		);
	}
};

