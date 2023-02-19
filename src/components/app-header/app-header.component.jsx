import * as CONSTANTS from "../../common/constants";
import useWindowScroll from "../../hooks/use-window-scroll";
import { ReactComponent as BrandLogo } from "./../../resources/images/common/brand-logo.svg";
import "./app-header.styles.scss";
import AppMainNav from "../app-main-nav/app-main-nav.component";

const AppHeader = ({ props, ...otherProps }) => {

    const windowScroll = useWindowScroll();

    return (
        <header className="app-header">
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
                <AppMainNav />
            </div>
        </header>
    );
};

export default AppHeader;
