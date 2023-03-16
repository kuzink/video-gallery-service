import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";

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

export const setVideoCategories = (videoCategories) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU_VIDEO_CATEGORIES,
		videoCategories: videoCategories
	}
};

export const resetVideoCategories = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SIDEBAR_MENU_VIDEO_CATEGORIES
	}
};

export const retrieveVideoCategories = () => {
	return (dispatch) => {
		axios.get(`${constants.BASE_URL}/video-categories`,
			{headers: {'Content-Type': 'application/json'}})
			.then(response => {
				dispatch(setVideoCategories(response.data));
			})
			.catch(error => {
				dispatch(resetVideoCategories());
				dispatch(setErrorMessage('Video categories retrieval ' + error));
			})
	}
};