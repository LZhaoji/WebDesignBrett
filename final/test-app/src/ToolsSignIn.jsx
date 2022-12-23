import "./ToolsSignIn.css";

function ToolsSignIn({signModalCallback, user}) {

    const signModalFunction = () => {
        signModalCallback();
    };

    return (
        <button className="tools__signin"
                onClick={signModalFunction}>
                    <i className="gg-user"></i>
                    Welcome!  {user}
        </button>
    );
}

export default ToolsSignIn;