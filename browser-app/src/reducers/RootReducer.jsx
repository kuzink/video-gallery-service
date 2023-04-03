import {combineReducers} from 'redux';
import alertReducer from './AlertReducer';
import itemsReducer from './ItemsReducer';
import slidesReducer from './SlidesReducer';
import sidebarReducer from './SidebarReducer';
import headerReducer from './HeaderReducer';

export default combineReducers({
	alert: alertReducer,
	items: itemsReducer,
	slides: slidesReducer,
	sidebar: sidebarReducer,
	header: headerReducer
});