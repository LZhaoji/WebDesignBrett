import NavGlobal from "./NavGlobal";
import MenuButtonOpen from "./MenuButtonOpen";

import "./Header.css";

import logo from "./img/logo.png";

function Header({darkMode, showDarkMode, signModalCallback, user,
            menuOn, setMenuOn, onBrowse}) {

    return (
        <header className="header">
            <MenuButtonOpen darkMode={darkMode} menuOn={menuOn} setMenuOn={setMenuOn}/>
            <a className="header__link"
                href="/"
                onClick={(event) => {
                    onBrowse(event, 'HOME');
                }}
            ><img className={`header__logo ${darkMode ? 'header__logo-dark' : null}`} src={logo} alt='click and back to home page'/></a>
            
            <NavGlobal darkMode={darkMode} 
                    showDarkMode={showDarkMode} 
                    signModalCallback={signModalCallback}
                    user={user}
                    menuOn={menuOn}
                    setMenuOn={setMenuOn}
                    onBrowse={onBrowse}/>
         
        </header>
    );
}

export default Header;