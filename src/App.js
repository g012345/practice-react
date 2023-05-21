import './App.css';

import Header from './components/header/header.jsx';
import Asid from './components/asid/asid.jsx';
import Profail from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Asid />
        <div className="main"><Dialogs   /></div>
        
    </div>);
}
export default App;
//<Profail />