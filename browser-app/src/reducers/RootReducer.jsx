import {combineReducers} from 'redux';
import alertReducer from './AlertReducer';
import spinnerReducer from './SpinnerReducer';
import itemsReducer from './ItemsReducer';

export default combineReducers({
	alert: alertReducer,
	spinner: spinnerReducer,
	items: itemsReducer
});