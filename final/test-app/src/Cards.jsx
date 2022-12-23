import "./Cards.css";

function Cards({src, alt, name, para,cate,onBrowse, darkMode}) {
    const readMore = 
                <a
                    className="card__button"
                    type="button"
                    href={cate}
                    onClick={
                        (e) => {
                            onBrowse(e, `${cate}`)
                        }
                    }>ReadMore!!</a>;
    return (
        <div className="card3d">
            <div className={`front ${darkMode ? 'dark' : 'light'}`}>
                <img className="card__img" src={src} alt={alt}/>
                
                <h2 className="card__title" key={name}>{name}</h2>
                
            </div>
            <div className={`back ${darkMode ? 'dark' : 'light'}`}>
                
                <p className="card__text" key={para}>{para}</p>
                {readMore}
            </div>
        </div>
        
    );
}

export default Cards;