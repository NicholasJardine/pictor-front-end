import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import InfoSection from './components/InfoSection';
import { homeObjOne, homeObjTwo } from './components/InfoSection/data';
function App() {
  return (
    <Router>

      <Navbar/>
      <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </Router>
  );
}

export default App;
