import toBostonInfo from "./js/toBostonInfo";
import "./GoToBoston.css";
function GoToBoston({setLink}) {
    const detail = toBostonInfo.map(
        (item) => {
            return (
                <div className="goto__card" key={item.title}>
                    <img src={item.img} className="goto__img" alt={item.alt}></img>
                    <div>
                        <h4 className="goto__title">{item.title}</h4>
                        <p className="goto__para">
                            {item.para}
                        </p>
                    </div>
                </div>
            );
        }
    );
    return (
        <>
            <h2>Woo! Looks like you really want to visit Boston~</h2>
            <h3>Getting To Boston</h3>
            {detail}
            <div className="box-survey"><a className="survey" onClick={() => setLink('Survey')}>&#129392;How do you feel about Boston? Let's do a survey!</a></div>
        </>
    )
}

export default GoToBoston;