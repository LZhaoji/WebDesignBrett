import NavSection from "./NavSection";
import NavButton from "./NavButton";
import Tools from "./Tools";
import MenuButtonClose from "./MenuButtonClose";

import { useState } from "react";

import "./NavGlobal.css";

import navMenu from "./js/navMenu";



function NavGlobal({darkMode, showDarkMode, signModalCallback, user,
            menuOn, setMenuOn, onBrowse}) {
    const [dropdown0, setDropdown0] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    const item1 = 
            (
                <li className="navmenu__dropdown" 
                    key={navMenu[0].title}>
                    <NavButton title={navMenu[0].title} showDropDown={setDropdown0}/>
                    
                    <ul  className={`nav__submenu ${dropdown0  ? null : 'nav__submenu-close'}`}>
                        <NavSection darkMode={darkMode} title={navMenu[0].title} onBrowse={onBrowse}/>
                    </ul>
                </li>
            );
        
    const item2 = 
            (
                <li className="navmenu__dropdown" 
                    key={navMenu[1].title}>
                    <NavButton title={navMenu[1].title} showDropDown={setDropdown1}/>
                    
                    <ul  className={`nav__submenu ${dropdown1  ? null : 'nav__submenu-close'}`}>
                        <NavSection darkMode={darkMode} title={navMenu[1].title} onBrowse={onBrowse}/>
                    </ul>
                </li>
            );

    const item3 = 
            (
                <li className="navmenu__dropdown" 
                    key={navMenu[2].title}>
                    <NavButton title={navMenu[2].title} showDropDown={setDropdown2}/>
                    
                    <ul  className={`nav__submenu ${dropdown2  ? null : 'nav__submenu-close'}`}>
                        <NavSection darkMode={darkMode} title={navMenu[2].title} onBrowse={onBrowse}/>
                    </ul>
                </li>
            );
    function xx() {
        if (user === 'Sign In'){
            return '';
        }else {
            return user+',';
        }
    }       

    return (
        
        <nav className={`nav ${menuOn ? null : 'nav-close'}`}>
            <div className={`${menuOn ? 'sidenav__query' : 'sidenav__query-close'}`}>
                <MenuButtonClose darkMode={darkMode} menuOn={menuOn} setMenuOn={setMenuOn}/>
                <h1 className="query">{xx()}What I can do for you?</h1>
            </div>
            <div className={`${menuOn ? 'sidenav__use' : 'sidenav__use-close'}`}>
                <ul className="nav__menu">
                    <li className="nav__home"><a className="nav__link-home" href="/" onClick={(event) => {onBrowse(event, 'HOME');}}>HOME</a></li>
                    {item1}
                    {item2}
                    {item3}
                </ul>
                <Tools darkMode={darkMode} 
                    showDarkMode={showDarkMode} 
                    signModalCallback={signModalCallback}
                    user={user}/>
            </div>
        </nav>
        
        
    );
}

export default NavGlobal;