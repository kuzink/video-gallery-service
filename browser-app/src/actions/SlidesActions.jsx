import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";

export const setSlides = (slides) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_SLIDES,
		slides: slides
	}
};

export const resetSlides = () => {
	return {
		type: constants.REDUX_STORE_EVENTS.RESET_SLIDES
	}
};

export const retrieveSlides = () => {
	return (dispatch) => {
	    axios.get(`${constants.BASE_URL}/slides`,
	        {headers: {'Content-Type': 'application/json'}})
	        .then(response => {
	            dispatch(setSlides(response.data));
	        })
		    .catch(error => {
			    dispatch(resetSlides());
			    dispatch(setErrorMessage('Slides retrieval ' + error));
		    })
	}
};

