import style from "./dialogs.module.css"
import Dialogsitem from "./dialogs_item/dialogsitem";


const Dialogs = () =>{
    return(
        <div className={style.main}>
            
            <div className="namepers"><Dialogsitem /></div>
            
        </div>
    )
}

export default Dialogs;