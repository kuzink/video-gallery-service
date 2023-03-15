import constants from '../constants/Constants';

export const setActiveItemId = (activeItemId) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU_ACTIVE_ITEM_ID,
		activeItemId: activeItemId
	}
};

export const resetActiveItemId = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SIDEBAR_MENU_ACTIVE_ITEM_ID
	}
};