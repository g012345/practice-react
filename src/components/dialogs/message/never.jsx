import style from "./message.module.css"
import Dialogs from "../dialogs"
import messagedata from "../../../server/data/dialogs/never";
const Message = (proper) =>{
    return(
        <div className={style.message}>
                {proper.info}
        </div>
    )
}
const Never = () =>{
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

export default Never;