import style from './profile.module.css';
import Mypost from './myposts/mypost/myposts';

const Profail = () =>{
    return(
        <main>
        <div className={style.hader_profile}>
          <div className={style.imgbg}>
            <img src={require('../../server/img/mainbg.png')} />
          </div>
          <div className={style.info}>
            <div>
              <img className={style.imgdog} src={require('../../server/img/dog.jpg')} />
            </div>
              <div className={style.name_cite}>
                <div>
                  <p className={style.name}>EGORKA JMEH</p>
                </div>
                <div className={style.cite_more_info}>
                  <p className={style.cite}>new yourk</p>
                  <p className={style.more_info}>more info</p>
                </div>
                
              </div>
          </div>
        </div>
          <div className={style.post}>
            <div>
                <p>data of berth:24dec</p>
                <p>education:BSU'11</p>
                <p>web site:https://zalupki.com</p>
              </div>
          <Mypost />
          </div>
              
        </main>
    )
}

export default Profail;