import constants from '../constants/Constants';
import axios from 'axios';
import {setErrorMessage} from "./AlertActions";
// import {trackPromise} from 'react-promise-tracker';
import RequestStatus from "../constants/RequestStatus";

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

export const retrieveSlidesRequest = (status) => {
	return {
		type: constants.REDUX_STORE_EVENTS.SET_RETRIEVE_SLIDES_REQUEST_STATUS,
		status: status
	}
};

export const retrieveSlides = () => {
	return (dispatch) => {
		dispatch(retrieveSlidesRequest(RequestStatus.LOADING));
	    axios.get(`${constants.BASE_URL}/slides`,
	        {headers: {'Content-Type': 'application/json'}})
	        .then(response => {
		        dispatch(retrieveSlidesRequest(RequestStatus.SUCCESS));
	            // dispatch(setSlides(response.data));
	        })
		    .catch(error => {
			    dispatch(retrieveSlidesRequest(RequestStatus.FAILURE));
			    dispatch(setErrorMessage('ERROR: Slides retrieval'));
			    dispatch(resetSlides());
		    })
	}
};

