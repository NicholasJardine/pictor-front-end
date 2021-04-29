import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom';

import InfoSection from './components/InfoSection';
import { homeObjOne, homeObjTwo } from './components/InfoSection/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
import News from './components/News';
import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import UsersShow from './containers/user_show'
// import Home from './pages'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SearchPage from './pages/search';
import UsersNew from './containers/users_new'
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import {createBrowserHistory as history} from 'history';
import { Provider } from 'react-redux';
import UsersReducer from './reducers/users_reducer';

import reduxPromise from 'redux-promise'; 
import { createBrowserHistory } from 'history' 
import history from './history'



function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (

<Router history={history}>


<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>

<Navbar toggle={toggle}/>
<Hero/>

<InfoSection {...homeObjOne} />
<InfoSection {...homeObjTwo} />
<News/>
<Footer/>

<Switch>
{/* <Route path="/" component={Home} exact /> */}
<Route path="/users/new" exact component={UsersNew} />
<Route path="/users/:id" component={UsersShow} exact />
<Route path="/signin" component={SigninPage} exact />
<Route path="/signup" component={UsersNew} exact />
<Route path="/search" component={SearchPage} exact />
</Switch>
</Router>



  );
}

export default App;


