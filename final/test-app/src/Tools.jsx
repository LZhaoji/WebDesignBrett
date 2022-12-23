// import { useState } from "react";
import ToolsSignIn from "./ToolsSignIn";
import ToolsDarkMode from "./ToolsDarkMode";

import "./Tools.css";

function Tools({darkMode, showDarkMode, signModalCallback, user}) {

    return (
        <div className="outer">
            <div className="tools">
                <ToolsSignIn signModalCallback={signModalCallback} user={user}/>
                <ToolsDarkMode darkMode={darkMode} showDarkMode={showDarkMode}/>
            </div>
        </div>
    );
}

export default Tools;