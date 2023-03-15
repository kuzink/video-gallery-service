import constants from '../constants/Constants';
import {initialSidebar} from './InitialState';

const setActiveItemId = (state, action) => {
	return {
		...state,
		activeItemId: action.activeItemId
	};
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU_ACTIVE_ITEM_ID]: setActiveItemId
};

export default (state = initialSidebar, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};