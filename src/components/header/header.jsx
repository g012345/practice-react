import style from './header.module.css';

const Header = () =>{
    return(
        <header className={style.header}>
          <img className={style.logot} src="https://i.pinimg.com/736x/20/f1/c8/20f1c889121b66a3040a6f2a12b84806.jpg"/>
        </header>
    )
}

export default Header;