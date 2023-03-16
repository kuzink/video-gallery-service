import constants from '../constants/Constants';
import {initialSidebar} from './InitialState';

const setActiveItemId = (state, action) => {
	return {
		...state,
		activeItemId: action.activeItemId
	};
};

const resetActiveItemId = (state) => {
	return {
		...state,
		activeItemId: ''
	};
};

const setVideoCategories = (state, action) => {
	return {
		...state,
		videoCategories: action.videoCategories
	};
};

const resetVideoCategories = (state) => {
	return {
		...state,
		videoCategories: []
	};
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU_ACTIVE_ITEM_ID]: setActiveItemId,
	[constants.REDUX_STORE_EVENTS.RESET_SIDEBAR_MENU_ACTIVE_ITEM_ID]: resetActiveItemId,
	[constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU_VIDEO_CATEGORIES]: setVideoCategories,
	[constants.REDUX_STORE_EVENTS.RESET_SIDEBAR_MENU_VIDEO_CATEGORIES]: resetVideoCategories
};

export default (state = initialSidebar, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};