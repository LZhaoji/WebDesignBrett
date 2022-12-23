import "./FamousCats.css";
import twins from "./img/catImage_Twinsfamous.jpeg";
import triple from "./img/catImage_Triplefamous.jpeg";

function FamousCats(params) {
    return (
        <div className="famous-cards">
                <div className="famous-card">
                    <img className="famous-card__img-twins" src={twins} alt="twins cats"/>
                    <div className="famous-card__text">
                        <h2 className="famous-card__title">Woo!Twins cats</h2>
                        <p className="famous-card__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti accusamus minima reiciendis quas recusandae ut ad labore vero quis inventore quam corrupti blanditiis porro odit consectetur, harum temporibus eveniet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur quis neque deleniti quam? Perferendis obcaecati eius consequatur exercitationem architecto quasi amet fuga, voluptatum in reprehenderit delectus explicabo minus accusamus.</p>
                    </div>     
                </div>
                <div className="famous-card">
                    <img className="famous-card__img-triple" src={triple} alt="triple cats"/>
                    <div className="famous-card__text">
                        <h2 className="famous-card__title">Woo!Three of the most famous funny cats</h2>
                        <p className="famous-card__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto deleniti accusamus minima reiciendis quas recusandae ut ad labore vero quis inventore quam corrupti blanditiis porro odit consectetur, harum temporibus eveniet?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed consequuntur quis neque deleniti quam? Perferendis obcaecati eius consequatur exercitationem architecto quasi amet fuga, voluptatum in reprehenderit delectus explicabo minus accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis dolorum voluptas consequatur nulla quibusdam perspiciatis dolore totam animi, est deserunt, officiis excepturi velit sit rem dicta tempore necessitatibus sint.</p>
                    </div>
                </div>
            </div>
    );
}

export default FamousCats;