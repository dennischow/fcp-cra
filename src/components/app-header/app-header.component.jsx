import * as CONSTANTS from "../../common/constants";
import { ReactComponent as BrandLogo } from "./../../resources/images/common/brand-logo.svg";
import "./app-header.styles.scss";
import AppNav from "../app-nav/app-nav.component";

const AppHeader = ({ props, ...otherProps }) => {
    return (
        <header className="app-header">
            <div className="app-header__container">
                <h1 className="app-header__brand">
                    <a className="app-header__brand-link">
                        <BrandLogo className="app-header__brand-logo" />
                        <span className="app-header__brand-name">{CONSTANTS.BRAND_NAME}</span>
                    </a>
                </h1>
                <AppNav />
            </div>
        </header>
    );
};

export default AppHeader;
