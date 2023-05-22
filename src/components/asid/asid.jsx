import styles from './asid.module.css';
import profail from "../profile/profile"
import Dialogs from '../dialogs/dialogs';

const Asid = () =>{
    return(
        <asid className={styles.asid}>
          <div className={styles.item}>
            <a href='/profail'>pro</a>
          </div>
          <div className={styles.item}>
            <a href='dialogs'>mes</a>
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