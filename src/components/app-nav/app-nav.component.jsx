import { Link } from "react-router-dom";

import "./app-nav.styles.scss";

const AppNav = ({ props, ...otherProps }) => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li className="app-nav__item">
                    <Link className="app-nav__link" to="/">Home</Link>
                </li>
                <li className="app-nav__item">
                    <Link className="app-nav__link" to="/about">About</Link>
                </li>
                {/* <li className="app-nav__item">
                    <Link className="app-nav__link" to="/">Works</Link>
                </li>
                <li className="app-nav__item">
                    <Link className="app-nav__link" to="/">Articles</Link>
                </li>
                <li className="app-nav__item">
                    <Link className="app-nav__link" to="/">Contact</Link>
                </li>
                <li className="app-nav__item">
                    <Link className="app-nav__link" to="/">Search</Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default AppNav;
