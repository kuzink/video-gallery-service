import {initialSlides} from './InitialState';
import constants from '../constants/Constants';

export const setSlides = (state, action) => {
	return {
		...state,
		slides: action.slides
	}
};

export const resetSlides = (state) => {
	return {
		...state,
		slides: []
	}
};

export const setRetrieveSlidesRequestStatus = (state, action) => {
	return {
		...state,
		retrieveSlidesRequest: {
			status: action.status
		}
	}
};

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_SLIDES]: setSlides,
	[constants.REDUX_STORE_EVENTS.RESET_SLIDES]: resetSlides,
	[constants.REDUX_STORE_EVENTS.SET_RETRIEVE_SLIDES_REQUEST_STATUS]: setRetrieveSlidesRequestStatus,
};

export default (state = initialSlides, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};