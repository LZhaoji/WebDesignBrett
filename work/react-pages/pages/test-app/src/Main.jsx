import MainCardCollection from "./MainCardCollection";
import ReadMore from "./ReadMore";
import FamousCats from "./FamousCats";

function Main({link, setLink}) {

    return(
        <main>
            {
                (link === "Home") ? <MainCardCollection setLink={setLink}/>
                    : 
                    (link === "About Cats") ? <ReadMore/>
                        : <FamousCats/>
            }
        </main>
    );
}

export default Main;
