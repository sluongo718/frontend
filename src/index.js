import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { combineReducers } from "redux";
import menuReducer from './reducers/menuReducer';
import waitListReducer from './reducers/waitListReducer'

const rootReducer = combineReducers({
   menuReducer: menuReducer,
  waitListReducer: waitListReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

{/* <React.StrictMode>
<App />
</React.StrictMode>, */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
