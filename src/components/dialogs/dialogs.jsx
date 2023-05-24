import style from "./dialogs.module.css"
import Dialogsitem from "./dialogs_item/dialogsitem";
import Never from "./message/never";
import {Routes , Route } from 'react-router-dom';
const Dialogs = () =>{
    return(
        <div className={style.main}>
            
            <div className="namepers"><Dialogsitem /></div>
            <div>
            <Routes >
                <Route path="/"Component={Never}/>
            </Routes>  

            </div>
        </div>
    )
}

export default Dialogs;