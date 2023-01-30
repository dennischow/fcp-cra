import { Fragment } from "react";
import "./app-footer.styles.scss";

const AppFooter = ({ props, ...otherProps }) => {
    return (
        <Fragment>
            <footer className="app-footer">
                <div className="container-fluid">
                    <small className="app-footer__copyright-info">©{new Date().getFullYear()} Brand Name</small>
                </div>
            </footer>
        </Fragment>
    );
};

export default AppFooter;
