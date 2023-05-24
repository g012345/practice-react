import { NavLink } from "react-router-dom";
import style from "./dialogsitem.module.css";
import Profail from "../../profile/profile";
const Dialogsprem = (props) =>{
    return(
    <div className={style.dialogsname}>
               <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
    </div>  
    )
    
}

const dialogsitem = () =>{
    return(
        <div className="dialogs">
            <Dialogsprem name="never" id="never"/>
            <Dialogsprem name="vlad" id="vlad"/>
            <Dialogsprem name="siva" id="siva"/>
            <Dialogsprem name="irek" id="irek"/>
        </div>
    )
}


export default dialogsitem;