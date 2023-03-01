import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
    }

    const getHeaderClassName = ({ isActive }) => {
        const classNames = ["app-header"];

        if (isActive) {
            classNames.push("app-header--has-main-nav");
        }

        return classNames.join(" ");
    };

    return (
        <header className={getHeaderClassName({isActive: isMainNavShown})}>
            <div className="app-header__scroll-progress-bar">
                <div className="app-header__scroll-progress-grow" style={{width: `${windowScroll.percentage}%`}}></div>
            </div>
            <div className="app-header__container">
                <h1 className="app-header__brand">
                    <a className="app-header__brand-link">
                        <BrandLogo className="app-header__brand-logo" />
                        <span className="app-header__brand-name">{CONSTANTS.BRAND_NAME}</span>
                    </a>
                </h1>
                <button className="app-header__nav-toggle" type="button" onClick={navToggleHandler}>
                    <span className="app-header__nav-toggle-text">Menu</span>
                    <span className="app-header__nav-toggle-icon">
                        {isMainNavShown ? <FaTimes /> : <FaBars /> }
                    </span>
                </button>
                <AppMainNav isMainNavShown={isMainNavShown} />
            </div>
        </header>
    );
};

export default AppHeader;
