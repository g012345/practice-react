import './App.css';

import Header from './components/header/header.jsx';
import Asid from './components/asid/asid.jsx';
import Profail from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Asid />
        <div className="main">
        <BrowserRouter>
        <Routes >
          <Route path="/dialogs"Component={Dialogs}/>
          <Route path="/profail"Component={Profail}/>
        </Routes>  
        </BrowserRouter>
        </div>
      </div>
    
    );
}
export default App;