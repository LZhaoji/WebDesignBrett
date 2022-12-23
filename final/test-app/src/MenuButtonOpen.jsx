
import "./MenuButtonOpen.css";

function MenuButtonOpen({darkMode, menuOn, setMenuOn}) {
    
    const clickMenuButton = () => {
        setMenuOn(!menuOn);
    };

    return (
        <button className={`menu__button ${darkMode ? 'menu__button-dark' : null}`}
                onClick={clickMenuButton}>
                
                    <i className={`gg-menu ${darkMode ? 'gg-menu-dark' : null}`}></i>
                       
                Open
            
        </button>
    );
}

export default MenuButtonOpen;