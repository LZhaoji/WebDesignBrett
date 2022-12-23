import GlobalNav from "./GlobalNav";

import "./Header.css";

import logoImg from "./img/catImage_Logo.jpeg";

function Header({ setLink }) {
    return (
        <header className="header">
            <img
              src={logoImg}
              className="header__logo"
              alt="Cats Logo"
              aria-label="Logo image, click and back to homepage"/>
            
            <h1 className="header__title">
                Cat Lover
            </h1>
            <GlobalNav className={"header__nav"} setLink={setLink}/>
        </header>
    );
}

export default Header;