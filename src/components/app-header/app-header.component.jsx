import { ReactComponent as BrandLogo } from "./../../resources/images/brand-logo.svg";
import "./app-header.styles.scss";

const AppHeader = ({ props, ...otherProps }) => {
    return (
        <header className="app-header">
            <div className="container-fluid">
                <h1 className="app-header__brand">
                    <a className="app-header__brand-link">
                        <BrandLogo className="app-header__brand-logo" />
                        <span className="app-header__brand-name">Brand Name</span>
                    </a>
                </h1>
            </div>
        </header>
    );
};

export default AppHeader;
