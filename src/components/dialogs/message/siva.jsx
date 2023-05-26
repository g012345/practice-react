import style from "./message.module.css"
import Dialogs from "../dialogs";
const Message = (props) =>{
    return(
        <div className={style.message}>
                {props.info}
        </div>
    )
}
const Siva = () =>{
    let messagedata = [
        {info: "1s33"}, 
        {info: "d"}, 
        {info: "a333"},]
    return(
        <div className={style.messages}>
            <Dialogs />
            <div>
                <Message  info={messagedata[0].info}/>
                <Message info={messagedata[1].info}/>
                <Message info={messagedata[2].info}/>
                
            </div>  
        </div>
    )   
}

export default Siva;