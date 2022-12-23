import MainPageCard from "./MainPageCard";

import "./MainCardCollection.css";

import cardInfo from "./CatImage";
import shyCat from "./img/catImage_Shy.jpeg";

function MainCardCollection({setLink}) {
    const cardContents = cardInfo.map(
        (cardContent) => {
            return (
                <MainPageCard src={cardContent.address} 
                        alt={cardContent.alt} 
                        name={cardContent.name} 
                        para={cardContent.para} 
                        key={cardContent.name}/>
            );
        }
    );

    const readMore = 
                <a
                    className="card__button"
                    type="button"
                    href="/"
                    onClick={
                        (e) => {
                            setLink('About Cats');
                            e.preventDefault();
                        }
                    }>ReadMore!!</a>

    return (
        <>
            {
                
                <div className="cardPage">
                    <div className="card">
                        <img className="card__img" src={shyCat} alt="it's a shy cat"/>
                        <h2 className="card__title">A shy cat</h2>
                        <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ea, commodi amet sunt ad, laborum facilis debitis nam deleniti magnam minus?{readMore} Porro vitae labore quasi incidunt, saepe eos non vel.</p>
                    </div>
                    { cardContents } 
                </div>
            }   
        </>
    );
}

export default MainCardCollection;