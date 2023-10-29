import styles from './asid.module.css';
import { NavLink } from "react-router-dom";

const Asid = () =>{
    return(
        <asid className={styles.asid}>
          <div className={styles.item}>
            <NavLink className={styles.white } to='/profail'>pro</NavLink>
          </div>
          <div className={styles.item}>
            <NavLink className={styles.white} to='/dialogs'>mes</NavLink>
          </div>
          <div className={styles.item}>
            <a>new</a>
          </div>
          <div className={styles.item}>
            <a>mus</a>
          </div>
          <div className={styles.item}>
            set
          </div>
          <div className={styles.frinds}>
              <nav className={styles.item}>how thise pokemon?</nav>
          <div className={styles.allface}>
            <div className={styles.face}>
              <NavLink to="/xanchick"><img className={styles.facepng} src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_SX679_.jpg"/></NavLink>
            </div>
            <div>
              <NavLink to='/maloy'><img className={styles.facepng} src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_SX679_.jpg"/></NavLink>
            </div>
            <div>
              <NavLink to="never"><img className={styles.facepng} src="https://m.media-amazon.com/images/I/61bueMdnn0L._AC_SX679_.jpg"/></NavLink>
            </div>
          </div>
          </div>
        </asid>
    )
}


export default Asid;