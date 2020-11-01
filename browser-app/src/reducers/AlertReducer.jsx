import constants from '../constants/Constants';
import {initialAlert} from './InitialState';

const setErrorMessage = (state, action) => {
	return {
		...state,
		message: action.error,
		isError: true
	};
};

const resetAlerts = (state) => {
	return {
		...state,
		message: '',
		isError: false
	};
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_ERROR_MESSAGE]: setErrorMessage,
	[constants.REDUX_STORE_EVENTS.RESET_ALERTS]: resetAlerts
};

export default (state = initialAlert, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};