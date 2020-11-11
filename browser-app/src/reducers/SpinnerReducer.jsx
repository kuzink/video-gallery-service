import constants from '../constants/Constants';
import {initialSpinner} from './InitialState';

const setSpinnerLoading = (state) => {
	return {
		...state,
		loading: true
	};
};

const resetSpinnerLoading = (state) => {
	return {
		...state,
		loading: false
	};
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_SPINNER_LOADING]: setSpinnerLoading,
	[constants.REDUX_STORE_EVENTS.RESET_SPINNER_LOADING]: resetSpinnerLoading
};

export default (state = initialSpinner, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};