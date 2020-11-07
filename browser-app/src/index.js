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
import {createLogger} from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store;

window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools ?
	store = createStore(
		rootReducer, compose(applyMiddleware(thunkMiddleware, promiseMiddleware, createLogger()), ReactReduxDevTools)
	) :
	store = createStore(
		rootReducer, compose(applyMiddleware(thunkMiddleware, promiseMiddleware, createLogger()))
	);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer/>
	</Provider>
	, document.getElementById('root')
);
