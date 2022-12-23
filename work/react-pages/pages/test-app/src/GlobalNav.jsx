import NavButton from "./NavButton";
import menu from "./menu";
import "./GlobalNav.css";

import { useState } from 'react';

function GlobalNav({ className, setLink }) {
    function onNav(event, target) {
        event.preventDefault();
        setLink(target);
    }

    const item = menu.map( (item) => {
        return (
            <li className="global-nav__item" key={ item.name }>
                <a className="global-nav__link" 
                    href={ item.path }
                    onClick={(e) => { onNav(e, `${item.name}`)}}>
                    { item.name }
                </a>
            </li>
        );
    });
    const [showMenu, setShowMenu] = useState(false);
    const list = 
            <ul className={ `${!showMenu ? "close" : null} global-nav__list` }> 
                { item }
            </ul>
        ;
    
    const buttonMenuFunction = () => {
        setShowMenu(!showMenu);
    };
    
    return (
        <nav className={ className }>
            <NavButton clickFunction={ buttonMenuFunction }/>
            { list }
        </nav>
    );
}

export default GlobalNav;
