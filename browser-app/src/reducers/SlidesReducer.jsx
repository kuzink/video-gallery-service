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

export const reducers = {
	[constants.REDUX_STORE_EVENTS.SET_SLIDES]: setSlides,
	[constants.REDUX_STORE_EVENTS.RESET_SLIDES]: resetSlides
};

export default (state = initialSlides, action) => {
	const {type} = action;
	return reducers[type] ? reducers[type](state, action) : state;
};