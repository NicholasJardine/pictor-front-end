import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import UsersReducer from './reducers/users_reducer';
import reduxPromise from 'redux-promise'; 
import { createHistory as history} from 'history'; 
import { reducer as formReducer } from 'redux-form'; 


const reducers = combineReducers({
  users: UsersReducer,
  form: formReducer
 }); 
 
 const middlewares = applyMiddleware(reduxPromise);
 
ReactDOM.render(

  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
