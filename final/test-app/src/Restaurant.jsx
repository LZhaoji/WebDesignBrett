import foodBoston from "./js/foodBoston"
import "./Restaurant.css";
function Restaurant({darkMode, setLink}) {
    const detail = foodBoston.map(
        (item) => {
            return (
                <div className="rest__card" key={item.title}>
                    <img src={item.img} className="rest__img" alt={item.alt}></img>
                    <div>
                        <h4 className="rest__title">{item.title}</h4>
                        <p className="rest__para">
                            {item.para}
                        </p>
                    </div>
                </div>
            );
        }
    );
    return (
        <>
            <h2>
                Get a Taste of Famous Boston Foods
            </h2>
            <p>There are plenty of desirable Boston foods, and that’s great — but that also means that it can be nearly impossible to narrow down your search to find the best Boston foods. If you’re traveling for a quick trip, you want to make sure that you waste no time in finding the best restaurants and the best foods at those restaurants.</p>
            {detail}
            <div className="box-survey"><a className="survey" onClick={() => setLink('Survey')}>How do you feel about Boston? Let's do a survey!</a></div>
        </>
    )
}

export default Restaurant;