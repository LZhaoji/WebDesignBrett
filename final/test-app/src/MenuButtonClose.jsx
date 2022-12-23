import "./MenuButtonClose.css";

function MenuButtonClose({darkMode, menuOn, setMenuOn}) {
    
    const clickMenuButton = () => {
        setMenuOn(!menuOn);
    };

    return (
        <button className={`menu__button-close ${darkMode ? 'menu__button-close-dark' : null}`}
                onClick={clickMenuButton}>
                  <i className='gg-close'></i>
            Close
        </button>
    );
}

export default MenuButtonClose;