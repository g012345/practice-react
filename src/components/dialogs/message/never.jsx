import style from "./message.module.css"

const Never = () =>{
    return(
        <div className={style.messages}>
            <div className={style.message}>
                hola
            </div>
            <div className={style.message}>
                amigo
            </div>
            <div className={style.message}>
                123
            </div>
        </div>
    )   
}

export default Never;