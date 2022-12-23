import Cards from "./Cards";
import carouselInfo from "./js/cardInfo";

import "./DefaultShowMain.css";

function DefaultShowMain({darkMode, onBrowse}) {

    const cardContents = carouselInfo.map(
        (cardContent) => {
            return (
                <Cards src={cardContent.img} 
                        alt={cardContent.alt} 
                        name={cardContent.title} 
                        para={cardContent.para}
                        cate={cardContent.cate} 
                        onBrowse={onBrowse}
                        darkMode={darkMode}
                        key={cardContent.title}/>
            );
        }
    );

    
    return (
        <>
            {
                
                <div className="cardPage">
                    
                    { cardContents } 
                </div>
            }   
        </>
    )
}

export default DefaultShowMain;