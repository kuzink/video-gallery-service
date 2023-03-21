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

export const setSidebarMenu = (sidebarMenu) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SIDEBAR_MENU,
		sidebarMenu: sidebarMenu
	}
};

export const resetSidebarMenu = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SIDEBAR_MENU
	}
};

export const retrieveSidebarMenu = () => {
	return (dispatch) => {
		axios.get(`${constants.BASE_URL}/sidebar-menu`,
			{headers: {'Content-Type': 'application/json'}})
			.then(response => {
				dispatch(setSidebarMenu(response.data));
			})
			.catch(error => {
				dispatch(resetSidebarMenu());
				dispatch(setErrorMessage('Sidebar menu retrieval ' + error));
			})
	}
};