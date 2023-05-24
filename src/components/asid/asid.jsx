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
        </asid>
    )
}


export default Asid;