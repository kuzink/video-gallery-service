import {combineReducers} from 'redux';
import alertReducer from './AlertReducer';
import itemsReducer from './ItemsReducer';
import slidesReducer from './SlidesReducer';

export default combineReducers({
	alert: alertReducer,
	items: itemsReducer,
	slides: slidesReducer
});