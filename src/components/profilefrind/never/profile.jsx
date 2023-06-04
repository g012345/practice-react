import style from './profile.module.css';
import { PostNever } from '../../profile/myposts/mypost/myposts';

const ProfailNever = () =>{
    return(
        <main>
          <div className={style.imgbg}>
            
          </div>
          <div>
            <div>
              <img className={style.imgdog} src='https://cdn.discordapp.com/attachments/996067818669879410/1113548131133558784/image.png' />
            </div>
            <div>
              <div>
                <p>Alpha PVP?</p>
              </div>
              <div>
                <p>data of berth:02.09.2005 </p>
                <p>live countre:ARK PVPPISHKA</p>
                <a href="https://www.youtube.com/@NEVER-ih6im" target='_blank'><img className={style.socialpng} src="https://overclockers.ru/st/legacy/blog/422417/362857_O.jpg"/></a>
              </div>
            </div>
          </div>
          <PostNever />
        </main>
    )
}

export default ProfailNever;