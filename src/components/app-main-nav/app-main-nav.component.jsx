import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaRegLightbulb, FaRss, FaRegEnvelope, FaSearch } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import "./app-main-nav.styles.scss";

const AppMainNav = () => {

    const { setIsPanelContactShow, setIsPanelSearchShow } = useContext(AppContext);
    const location = useLocation();

    const getNavItemClassName = ({ type }) => {
        const classNames = ["app-main-nav__item"];
        let isActive = false;

        if (type === "/") {
            isActive = location.pathname === type;
        } else {
            isActive = location.pathname.startsWith(type);
        }

        if (isActive) {
            classNames.push("app-main-nav__item--active");
        }

        return classNames.join(" ");
    };

    const toggleContactPanel = () => {
        setIsPanelContactShow((preValue) => !preValue);
        setIsPanelSearchShow(false);
        console.log("toggleContactPanel");
    };

    const toggleSearchPanel = () => {
        setIsPanelContactShow(false);
        setIsPanelSearchShow((preValue) => !preValue);
        console.log("toggleSearchPanel");
    };

    return (
        <nav className="app-main-nav">
            <ul className="app-main-nav__list">
                <li className={getNavItemClassName({ type: "/" })}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.home.path} exact="true">
                        <span className="app-main-nav__icon">
                            <FaHome />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.home.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName({ type: "/about" })}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.about.path}>
                        <span className="app-main-nav__icon">
                            <FaUser />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.about.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName({ type: "/projects" })}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.projectsOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRegLightbulb />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.projectsOverview.name}</span>
                    </Link>
                </li>
                <li className={getNavItemClassName({ type: "/articles" })}>
                    <Link className="app-main-nav__link" to={CONSTANTS.ROUTES.articlesOverview.path}>
                        <span className="app-main-nav__icon">
                            <FaRss />
                        </span>
                        <span className="app-main-nav__text">{CONSTANTS.ROUTES.articlesOverview.name}</span>
                    </Link>
                </li>
                <li className="app-main-nav__item">
                    <button className="app-main-nav__link" type="button" onClick={toggleContactPanel}>
                        <span className="app-main-nav__icon">
                            <FaRegEnvelope />
                        </span>
                        <span className="app-main-nav__text">Contact</span>
                    </button>
                </li>
                <li className="app-main-nav__item">
                    <button className="app-main-nav__link" type="button" onClick={toggleSearchPanel}>
                        <span className="app-main-nav__icon">
                            <FaSearch />
                        </span>
                        <span className="app-main-nav__text">Search</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AppMainNav;
