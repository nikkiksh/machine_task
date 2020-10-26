import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import '../src/index.css';

import { Provider } from 'react-redux';
import { loginReducer } from './reducers/loginReducer';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(loginReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component = { Login } />
        <Route path="/employeeList" component = { EmployeeList } isLoggedIn = {store.loggedIn}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
