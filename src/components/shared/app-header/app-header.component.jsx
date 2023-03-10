import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

import * as CONSTANTS from "../../../common/constants";
import useWindowScroll from "../../../hooks/use-window-scroll";
import { ReactComponent as BrandLogo } from "./../../../resources/images/common/brand-logo.svg";
import "./app-header.styles.scss";
import AppMainNav from "../app-main-nav/app-main-nav.component";

const AppHeader = ({ props, ...otherProps }) => {
    const [isMainNavShown, setIsMainNavShown] = useState(false);
    const location = useLocation();
    const windowScroll = useWindowScroll();

    useEffect(() => {
        setIsMainNavShown(false);
    }, [location]);

    const navToggleHandler = () => {
        setIsMainNavShown(!isMainNavShown);
    };

    const getHeaderClassName = ({ isActive }) => {
        const classNames = ["app-header"];

        if (isActive) {
            classNames.push("app-header--has-main-nav");
        }

        return classNames.join(" ");
    };

    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <header className={getHeaderClassName({ isActive: isMainNavShown })}>
            <div className="app-header__scroll-progress-bar">
                <div
                    className="app-header__scroll-progress-grow"
                    style={{ width: `${windowScroll.percentage}%` }}></div>
            </div>
            <div className="app-header__container">
                <h1 className="app-header__brand">
                    <Link className="app-header__brand-link" to={CONSTANTS.ROUTES.home.path}>
                        <BrandLogo className="app-header__brand-logo" />
                        <span className="app-header__brand-name">{CONSTANTS.BRAND_NAME}</span>
                    </Link>
                </h1>
                <button
                    className="app-header__nav-toggle"
                    type="button"
                    onClick={navToggleHandler}
                    aria-label="Toggle mobile navigation">
                    <span className="app-header__nav-toggle-text">Menu</span>
                    <span className="app-header__nav-toggle-icon">{isMainNavShown ? <FaTimes /> : <FaBars />}</span>
                </button>
                <AppMainNav isMainNavShown={isMainNavShown} />
            </div>
            <button className="app-header__scroll-to-top" type="button" onClick={scrollToTopHandler}>
                scroll to Top <FaArrowRight />
            </button>
        </header>
    );
};

export default AppHeader;
