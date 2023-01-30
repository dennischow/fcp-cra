import { ReactComponent as BrandLogo } from "./../../resources/images/brand-logo.svg";
import "./app-header.styles.scss";

const AppHeader = ({ props, ...otherProps }) => {
    return (
        <header className="app-header">
            <div className="container-fluid">
                <h1 className="app-header__brand">
                    <span className="app-header__brand-name">Brand Name</span>
                    <a className="app-header__brand-logo-link">
                        <BrandLogo className="app-header__brand-logo" />
                    </a>
                </h1>
            </div>
        </header>
    );
};

export default AppHeader;
