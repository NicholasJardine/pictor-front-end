import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoSection from './components/InfoSection';
import { homeObjOne, homeObjTwo } from './components/InfoSection/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
import News from './components/News';
import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'

// import Home from './pages'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import SearchPage from './pages/search'
function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>


              <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>

      <Navbar toggle={toggle}/>
      <Hero/>

      <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <News/>
        <Footer/>

        <Switch>
      {/* <Route path="/" component={Home} exact /> */}
      <Route path="/signin" component={SigninPage} exact />
      <Route path="/signup" component={SignupPage} exact />
      <Route path="/searchact" component={SearchPage} exact />
      </Switch>
    </Router>
  );
}

export default App;

