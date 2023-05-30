import style from "./message.module.css"
import Dialogs from "../dialogs";
import messagedata from "../../../server/data/dialogs/vlad";
const Message = (proper) =>{
    return(
        <div className={style.message}>
                {proper.info}
        </div>
    )
}
const Vlad = () =>{ 
        let messageelement = messagedata.map(message => <Message  info={message.info}/> )
    return(
        <div className={style.messages}>
            <Dialogs />
            <div>
                {messageelement}
                
            </div>  
        </div>
    )   
}

export default Vlad;