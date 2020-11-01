import {combineReducers} from 'redux';
import alertReducer from './AlertReducer';
import itemsReducer from './ItemsReducer';

export default combineReducers({
	alert: alertReducer,
	items: itemsReducer
});