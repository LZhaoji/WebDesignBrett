import visitBoston from "./js/visitBoston";

function VisitBoston({darkMode, setLink}) {
    const detail = visitBoston.map(
        (item) => {
            return (
                <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.para}</p>
                </div>
            );
        }
    );
    return (
        <>
            <h2> How to Get Around Boston for Tourists</h2>
            {detail}
            <div className="box-survey"><a className="survey" onClick={() => setLink('Survey')}>How do you feel about Boston? Let's do a survey!</a></div>
        </>
    )
}

export default VisitBoston;