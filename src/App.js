import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoSection from './components/InfoSection';
import { homeObjOne, homeObjTwo } from './components/InfoSection/data';
import Footer from './components/Footer';
import Hero from './components/Hero';
function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>

      <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
        <Footer/>
    </Router>
  );
}

export default App;
