import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaRegLightbulb, FaRss, FaRegEnvelope, FaSearch } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import "./app-nav.styles.scss";

const AppNav = ({ props, ...otherProps }) => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.home.path}>
                        <span className="app-nav__icon">
                            <FaHome />
                        </span>
                        <span className="app-nav__text">
                            {CONSTANTS.ROUTES.home.name}
                        </span>
                    </NavLink>
                </li>
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.about.path}>
                        <span className="app-nav__icon">
                            <FaUser />
                        </span>
                        <span className="app-nav__text">
                            {CONSTANTS.ROUTES.about.name}
                        </span>
                    </NavLink>
                </li>
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.projectsOverview.path}>
                        <span className="app-nav__icon">
                            <FaRegLightbulb />
                        </span>
                        <span className="app-nav__text">
                            {CONSTANTS.ROUTES.projectsOverview.name}
                        </span>
                    </NavLink>
                </li>
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.articles.path}>
                        <span className="app-nav__icon">
                            <FaRss />
                        </span>
                        <span className="app-nav__text">
                            {CONSTANTS.ROUTES.articles.name}
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppNav;
