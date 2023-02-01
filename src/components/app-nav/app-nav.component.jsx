import { NavLink } from "react-router-dom";

import * as constants from "../../app.constants";
import "./app-nav.styles.scss";

const AppNav = ({ props, ...otherProps }) => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={constants.ROUTES.home.path}>
                        {constants.ROUTES.home.name}
                    </NavLink>
                </li>
                <li className="app-nav__item">
                    <NavLink className="app-nav__link" to={constants.ROUTES.about.path}>
                        {constants.ROUTES.about.name}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default AppNav;
