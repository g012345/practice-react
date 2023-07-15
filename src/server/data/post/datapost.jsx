import rereder from "../../../index.js";
let Infopostdata = [
    {message: "hahahahhahahaha",like: "32"}, 
    {message: "you are sou bad",like: "23"},
    {message: "hahahahhahahaha",like: "32"}, 
    {message: "hahahahhahahaha",like: "32"}, ]
let newPosts={
    newPostText:"123"
}
    let Datapostnever = [
    {message: "в конце легнда",like: "0"},
    {message: "Top higlits",like: "0"},
    {message: "ARK умирает    GG",like: "0"},
    {message: "был база нету база",like: "0"},
    {message: "A говорил что на фане играть не будешь",like: "0"},
    {message: "Тильт не первый",like: "0"},
    {message: "что за игра?",like: "0"},
]
let gddpost = () =>{
    let newPost ={
        message: newPosts.newPostText,
        like:"324"
    }
    Infopostdata.push(newPost)
    rereder()
    newPosts.newPostText = ""
}
let updateNewPostText = (newText) =>{
    
    newPosts.newPostText = newText;
    rereder()
}

export default Infopostdata;
export {Datapostnever,gddpost, newPosts,updateNewPostText};