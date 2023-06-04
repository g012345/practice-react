import Vlad from "../components/dialogs/message/vlad";
import Never from "../components/dialogs/message/never";
import Siva from "../components/dialogs/message/siva";
import Irek from "../components/dialogs/message/irek";
import {Routes , Route } from 'react-router-dom';

const costile = () =>{
    return(
        <div>
            <Routes>
                <Route path="/dialogs/vlad"Component={Vlad}/>
                <Route path="/dialogs/never"Component={Never}/>
                <Route path="/dialogs/siva"Component={Siva}/>
                <Route path="/dialogs/irek"Component={Irek}/>

            </Routes>
        </div>
    )
}

export default costile;