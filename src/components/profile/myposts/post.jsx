import style from "./post.module.css";
const Mypost = () =>{
    let infopostdata = [
      {message: "hahahahhahahaha",like: "32"}, 
      {message: "you are sou bad",like: "23"},
      {message: "hahahahhahahaha",like: "32"}, 
      {message: "hahahahhahahaha",like: "32"}, ]
      let postel = infopostdata.map(p => <Post message={p.message} like={p.like}/>)
      return(
          <div>
            {postel}
          </div>
      )       
  }
const Post = (props) =>{
    return(
        <div>
            <img src="https://w7.pngwing.com/pngs/97/638/png-transparent-clown-emoji-happy-smiling-monkey-business-whatsapp-social-networks-emoticon-emotions-face.png" className={style.imgav}/>
            {props.message}
            <div>
                <button>like</button>
                {props.like}
            </div>
        </div>
    )
}

export default {Post , Mypost};