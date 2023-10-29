import style from "./post.module.css";

const Post = (props) =>{
    return(
        <div>
            <img src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_SX679_.jpg" className={style.imgav}/>
            {props.message}
            <div>
                <button>like</button>
                {props.like}
            </div>
        </div>
    )
}

export default Post 