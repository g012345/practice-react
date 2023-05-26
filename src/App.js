import './App.css';

import Header from './components/header/header.jsx';
import Asid from './components/asid/asid.jsx';
import Profail from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Costile from './costile/costile';
import {Routes , Route } from 'react-router-dom';

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Asid />
        <div className="main">
        <Routes >
          <Route path="/"Component={Profail}/>
          <Route path="/dialogs"Component={Dialogs}/>
          <Route path="/profail"Component={Profail}/>
        </Routes> 
        <Costile />
        </div>
      </div>
    
    );
}

export default App;