import "./ToolsDarkMode.css";

function ToolsDarkMode({darkMode, showDarkMode}) {

    const darkModeFunction = () => {
        showDarkMode(!darkMode);
    };

    return(
        <button className="tools__button-mode"
                onClick={darkModeFunction}>
                    <i className="gg-dark-mode"></i>
                        {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
}

export default ToolsDarkMode;