import styles from './asid.module.css';


const Asid = () =>{
    return(
        <asid className={styles.asid}>
          <div className={styles.item}>
            <a>pro</a>
          </div>
          <div className={styles.item}>
            <a>mes</a>
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