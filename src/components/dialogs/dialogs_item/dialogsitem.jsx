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
    let  dialogselement = dialogsdata.map( dialog => <Dialogsprem name={dialog.name} id={dialog.id}/>)

    return(
        
        <div className="dialogs">
            {dialogselement}
        </div>
    )
}


export default dialogsitem;