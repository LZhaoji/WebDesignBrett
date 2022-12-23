import Carsouel from "./Carsouel";
import "./Survey.css";

function Survey({menuOn}) {
    return (
        <div className="survey__box">
            <div className="survey__dis">Please Show us Your Choice! Just Click the Button!</div>
            <Carsouel menuOn={menuOn}/>
        </div>
    );
}

export default Survey;