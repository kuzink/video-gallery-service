import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";

export const setItems = (items) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_ITEMS,
		items: items
	}
};

export const setItemDetails = (itemDetails) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_ITEM_DETAILS,
		itemDetails: itemDetails
	}
};

export const resetItemDetails = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_ITEM_DETAILS
	}
};

export const retrieveItems = () => {
	return (dispatch) => {
	    axios.get('items',
	        {headers: {'Content-Type': 'application/json'}})
	        .then(response => {
	            dispatch(setItems(response.data));
	        })
		    .catch(error => {
			    dispatch(setErrorMessage('ERROR: Items retrieval'));
		    })
	}
};

export const retrieveItemDetails = (itemId) => {
	return (dispatch) => {
		axios.get('items/' + itemId,
			{headers: {'Content-Type': 'application/json'}})
			.then(response => {
				dispatch(setItemDetails(response.data));
			})
			.catch(error => {
				dispatch(setErrorMessage('ERROR: Item details retrieval (id - ' + itemId + ')'));
				dispatch(resetItemDetails());
			})
	}
};
