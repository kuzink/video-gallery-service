import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";

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

