import './App.css';

import Header from './components/header/header.jsx';
import Asid from './components/asid/asid.jsx';
import Profail from './components/profile/profile';
const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Asid />
        <Profail />
    </div>);
}
export default App;
