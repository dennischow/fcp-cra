import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaRegLightbulb, FaRss, FaRegEnvelope, FaSearch } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import "./app-main-nav.styles.scss";

const AppMainNav = ({ props, ...otherProps }) => {
    const [firstSegmentName, setFirstSegmentName] = useState("");
    const location = useLocation();
    const { pathname } = location;
    const splitPath = pathname.split("/");

    useEffect(() => {
        setFirstSegmentName(splitPath[1]);
        return () => {};
    }, [location]);

    const getNavItemClassName = (isActive) => {
        const classNames = ["app-main-nav__item"];
        if (isActive) {
            classNames.push("app-main-nav__item--active");
        }
        return classNames.join(" ");
    };

    return (
        <nav className="app-main-nav">
            <ul className="app-main-nav__list">
                <li className={getNavItemClassName(firstSegmentName === "")}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.home.path}>
                        <span className="app-main-nav__icon">
                            <FaHome />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.home.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName(firstSegmentName === "about")}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.about.path}>
                        <span className="app-main-nav__icon">
                            <FaUser />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.about.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName(firstSegmentName === "projects")}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.projectsOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRegLightbulb />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.projectsOverview.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName(firstSegmentName === "articles")}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.articlesOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRss />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.articlesOverview.name}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default AppMainNav;
