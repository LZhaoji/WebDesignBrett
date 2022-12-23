import "./MainPageCard.css";

function MainPageCard({src, alt, name, para}) {
    
    return (
        <div className="card">
            <img className="card__img" src={src} alt={alt}/>
            <h2 className="card__title" key={name}>{name}</h2>
            <p className="card__text" key={para}>{para}</p>
        </div>
    );
}

export default MainPageCard;