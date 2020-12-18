import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from "./Components/Home";
import reducer from "./store/reducer"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/saga"

const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
  <Home />
  </Provider>,
  document.getElementById('root')
);

