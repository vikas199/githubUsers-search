import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../src/reducers/index'
import {watchUserSaga} from '../src/sagas/indexSaga'
import './index.css';
import App from './App';

const saga = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(saga))
saga.run(watchUserSaga)


ReactDOM.render(
<Provider store= {store}>
<App />
</Provider>, document.getElementById('root'));

