import style from "./message.module.css"
import Dialogs from "../dialogs";
const Message = (proper) =>{
    return(
        <div className={style.message}>
                {proper.info}
        </div>
    )
}

const Irek = () =>{
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

export default Irek;