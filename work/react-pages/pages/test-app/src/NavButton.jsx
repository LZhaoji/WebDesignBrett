import "./NavButton.css";

function NavButton({ clickFunction }) {
    return (
        <button 
            type="button" 
            className="global-nav__button"
            onClick={ clickFunction }>
                <i className="gg-menu"></i>
        </button>
    );
}

export default NavButton;