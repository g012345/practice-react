import { createRef ,Component } from 'react';
import Post from '../post';
import Infopostdata from '../../../../server/data/post/datapost';
import { Datapostnever, gddpost,newPosts,updateNewPostText } from '../../../../server/data/post/datapost';

const Mypost = () =>{
    let Datapostel = Infopostdata.map(p => <Post message={p.message} like={p.like}/>)
    let newPostElemt = createRef();
    let Addpost = () =>{
      let text = newPostElemt.current.value;
      gddpost(text);
    }
    let onPostChange =()=>{
      let text = newPostElemt.current.value;
      updateNewPostText(text)
    }
    return(
        <div>
          <textarea onChange={onPostChange} ref={newPostElemt} value={newPosts.newPostText} />
          <button onClick={Addpost}>add post</button>
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