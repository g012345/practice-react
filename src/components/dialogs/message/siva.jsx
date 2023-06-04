import style from "./message.module.css"
import Dialogs from "../dialogs";
import messagedata from "../../../server/data/dialogs/siva";
const Message = (props) =>{
    return(
        <div className={style.message}>
                {props.info}
        </div>
    )
}
const Siva = () =>{

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

export default Siva;