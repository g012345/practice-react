import style from './mypost.module.css';
import Post from '../post/post';
import Infopostdata from '../../../../server/data/post/datapost';
import { Datapostnever } from '../../../../server/data/post/datapost';

const Mypost = () =>{
    let Datapostel = Infopostdata.map(p => <Post message={p.message} like={p.like}/>)
    return(
        <div>
          {Datapostel}
        </div>
    )       
}
const PostNever = () =>{
  let Datapostel = Datapostnever.map(p => <Post message={p.message} like={p.like}/>)
  return(
      <div>
        {Datapostel}
      </div>
  )       
}

export default Mypost;
export {PostNever}