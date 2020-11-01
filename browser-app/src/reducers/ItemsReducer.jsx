import {initialItemDetails, initialItems} from './InitialState';
import constants from '../constants/Constants';

export const setItems = (state, action) => {
	return {
		...state,
		items: action.items
	}
};

export const setItemDetails = (state, action) => {
	return {
		...state,
		itemDetails: action.itemDetails
	}
};

export const resetItemDetails = (state) => {
	return {
		...state,
		itemDetails: initialItemDetails
	}
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_ITEMS]: setItems,
	[constants.REDUX_STORE_EVENTS.SET_ITEM_DETAILS]: setItemDetails,
	[constants.REDUX_STORE_EVENTS.RESET_ITEM_DETAILS]: resetItemDetails
};

export default (state = initialItems, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};