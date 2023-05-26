import style from './mypost.module.css';
import Post from '../post/post';

const Mypost = () =>{
  let infopostdata = [
    {message: "hahahahhahahaha",like: "32"}, 
    {message: "you are sou bad",like: "23"},]
    return(
        <div>
          <Post message={infopostdata[0].message} like={infopostdata[0].like}/>
          <Post message={infopostdata[1].message} like={infopostdata[1].like}/>
        </div>
    )       
}

export default Mypost;