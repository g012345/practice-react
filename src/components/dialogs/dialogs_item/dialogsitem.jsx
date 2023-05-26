import { NavLink } from "react-router-dom";
import style from "./dialogsitem.module.css";

const Dialogsprem = (props) =>{
    return(
    <div className={style.dialogsname}>
               <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
    </div>  
    )
    
}


const dialogsitem = () =>{
    let dialogsdata = [
        {name: "never",id: "never"}, 
        {name: "vlad",id: "vlad"},
        {name: "siva",id: "siva"},
        {name: "irek",id: "irek"}]
    return(
        
        <div className="dialogs">
            <Dialogsprem name={dialogsdata[0].name} id={dialogsdata[0].id}/>
            <Dialogsprem name={dialogsdata[1].name} id={dialogsdata[1].id}/>
            <Dialogsprem name={dialogsdata[2].name} id={dialogsdata[2].id}/>
            <Dialogsprem name={dialogsdata[3].name} id={dialogsdata[3].id}/>
        </div>
    )
}


export default dialogsitem;