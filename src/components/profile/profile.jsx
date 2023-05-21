import style from './profile.module.css';
import Mypost from './myposts/mypost/myposts';

const Profail = () =>{
    return(
        <main>
          <div className={style.imgbg}>
            <img src={require('../../img/mainbg.png')} />
          </div>
          <div>
            <div>
              <img className={style.imgdog} src={require('../../img/dog.jpg')} />
            </div>
            <div>
              <div>
                <p>EGORKA JMEH</p>
              </div>
              <div>
                <p>data of berth:24dec</p>
                <p>cite:new yourk</p>
                <p>education:BSU'11</p>
                <p>web site:https://zalupki.com</p>
              </div>
            </div>
          </div>
          <Mypost />
        </main>
    )
}

export default Profail;