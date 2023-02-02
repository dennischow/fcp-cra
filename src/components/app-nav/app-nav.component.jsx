import { NavLink } from "react-router-dom";

import * as CONSTANTS from "../../common/constants";
import "./app-nav.styles.scss";

const AppNav = ({ props, ...otherProps }) => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.home.path}>
                        {CONSTANTS.ROUTES.home.name}
                    </NavLink>
                </li>
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={CONSTANTS.ROUTES.about.path}>
                        {CONSTANTS.ROUTES.about.name}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppNav;
