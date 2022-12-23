import "./Footer.css";

import footerMenu from "./footerMenu";

function Footer(params) {

    const item = footerMenu.map(
        ( item ) => {
            return (
                <li className="footer__item" key={ item.name }> 
                    <a className="footer__link" href={ item.address }>
                        { item.name }
                    </a>
                </li>
            );
        } 
    );

    const list = 
            <ul className="footer__menu">
                { item }
            </ul>

    return (
        <footer className="footer">
            { list }
        </footer>
    );
}

export default Footer;