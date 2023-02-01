import * as constants from "../../app.constants";
import { ReactComponent as BrandLogo } from "./../../resources/images/brand-logo.svg";
import "./app-header.styles.scss";

const AppHeader = ({ props, ...otherProps }) => {
    return (
        <header className="app-header">
            <div className="container-fluid">
                <h1 className="app-header__brand">
                    <a className="app-header__brand-link">
                        <BrandLogo className="app-header__brand-logo" />
                        <span className="app-header__brand-name">{constants.BRAND_NAME}</span>
                    </a>
                </h1>
                <nav className="app-nav">
                    <ul className="app-nav__list">
                        <li className="app-nav__list-item">
                            <a className="app-nav__link" href="#"></a>
                            <a className="app-nav__link" href="#"></a>
                            <a className="app-nav__link" href="#"></a>
                            <a className="app-nav__link" href="#"></a>
                            <a className="app-nav__link" href="#"></a>
                            <a className="app-nav__link" href="#"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AppHeader;
