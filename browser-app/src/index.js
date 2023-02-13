import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import AppContainer from './components/AppContainer';
import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/RootReducer";
import promiseMiddleware from 'redux-promise-middleware';

const reactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = window.navigator.userAgent.includes("Chrome") && reactReduxDevTools
	? createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, promiseMiddleware), reactReduxDevTools))
	: createStore(rootReducer, compose(applyMiddleware(thunkMiddleware, promiseMiddleware)));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>, document.getElementById('root')
);
