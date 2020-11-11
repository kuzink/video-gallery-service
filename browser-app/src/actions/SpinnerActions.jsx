import constants from '../constants/Constants';

export const setSpinnerLoading = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SPINNER_LOADING
	}
};

export const resetSpinnerLoading = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SPINNER_LOADING
	}
};
