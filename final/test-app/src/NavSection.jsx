import travelMenu from "./js/travelMenu";
import foodMenu from "./js/foodMenu";
import planMenu from "./js/planMenu";

import "./NavSection.css";

function NavSection({darkMode, title, onBrowse}) {
    // console.log(onBrowse);
    const travel = travelMenu.map(
        (t) => {
            return (
                <li className={`nav__submenu__item ${darkMode ? 'nav__submenu__item-dark' : null}`}
                    key={t.subTitle}>
                    <a className="nav__submenu__link" 
                        href={t.address}
                        onClick={(event) => {
                            onBrowse(event, `${t.subTitle}`);
                            }}>
                            {t.subTitle}
                    </a>
                </li>
            );
        }
    );

    const food = foodMenu.map(
        (f) => {
            return (
                <li className={`nav__submenu__item ${darkMode ? 'nav__submenu__item-dark' : null}`}
                    key={f.subTitle}>
                    <a className="nav__submenu__link" 
                        href={f.address}
                        onClick={(event) => {
                            onBrowse(event, `${f.subTitle}`);
                            }}>
                            {f.subTitle}
                    </a>
                </li>
            );
        }
    );

    const plan = planMenu.map(
        (p) => {
            return (
                <li className={`nav__submenu__item ${darkMode ? 'nav__submenu__item-dark' : null}`}
                    key={p.subTitle}>
                    <a className="nav__submenu__link" 
                        href={p.address}
                        onClick={(event) => {
                            onBrowse(event, `${p.subTitle}`);
                            }}>
                            {p.subTitle}
                    </a>
                </li>
            );
        }
    );

    return (
        <>
            {
                (title === 'TRAVELS') ? travel 
                    :
                    (title === 'FOOD') ? food 
                    :
                        plan
            }
        </>
    );
}

export default NavSection;