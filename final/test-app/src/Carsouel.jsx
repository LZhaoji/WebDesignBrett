import { useState } from "react";
import galleryInfo from "./js/galleryInfo";
import "./Carsouel.css";

function Carsouel({menuOn}) {

    const [left, setLeft]     = useState(0);
    const [good, setGood]     = useState(0);
    const [bad, setBad]       = useState(0);

    const [ins, setIns]       = useState([]);
    const [notins, setNotins] = useState([]);

    function marginChangeGood(params) {
        if (left <= -1800) {
            setLeft(0);
        }else {
            setLeft(left - 360);
        }
        let n = left / -360;
        setIns((ins) => [...ins, galleryInfo[n].cate]);
        setGood(good + 1);
    }

    function marginChangeBad(params) {
        if (left <= -1800) {
            setLeft(0);
        }else {
            setLeft(left - 360);
        }
        let n = left / -360;
        setNotins((notins) => [...notins, galleryInfo[n].cate]);
        setBad(bad + 1);
    }

    function clean(params) {
        setGood(0);
        setBad(0);
        
        setIns([]);
        setNotins([]);
    }
    
    const gallery = galleryInfo.map(
        (item) => {
            return (
                <li className="gallery__img" key={item.img}>
                    <img src={item.img} alt={item.cate}></img>
                </li>
            ); 
        }
    );
    
    return (
    <>
        <div className={ `gallery__box ${!menuOn ? null : 'gallery__box-navopen'}`}>
            <div className="gallery">
                <ul className="gallery__imglist" style={{marginLeft: left}}>
                    {gallery}
                    {gallery[0]}
                </ul>
            </div>
        </div>    
        <div className="gallery__button">
            <button className="gallery__button-good" onClick={marginChangeGood}>Wonderful! &#128522;</button>
            <button className="gallery__button-clean" onClick={clean}>Clean All</button>
            <button className="gallery__button-bad" onClick={marginChangeBad}>Emm...&#128549;</button>
        </div>
        
        <div className="gallery__count">There are 
            <p className="count-good">{good}</p> points attract you and 
            <p className="count-bad">{bad}</p> points are bored you.
        </div>
        <div className="choise__box">
            <div className="choise__ins"><ul>You are interested in: { ins.map( (item, index) => {return (<li className="item" key={index}>{item}</li>) } ) }</ul></div>
            <div className="choise__notins"><ul>You are not interested in:{ notins.map( (item, index) => {return (<li className="item" key={index}>{item}</li>) } ) }</ul></div>
        </div>
        
    </>
    );
}

export default Carsouel;