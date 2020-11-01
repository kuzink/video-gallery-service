import constants from '../constants/Constants';

export const setErrorMessage = (error) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_ERROR_MESSAGE,
		error
	}
};

export const resetAlerts = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_ALERTS
	}
};
