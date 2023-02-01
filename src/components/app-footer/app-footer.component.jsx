import { Fragment } from "react";

import * as constants from "../../app.constant";
import "./app-footer.styles.scss";

const AppFooter = ({ props, ...otherProps }) => {
    return (
        <Fragment>
            <footer className="app-footer">
                <div className="app-footer__container">
                    <small className="app-footer__copyright-info">
                        <span className="app-footer__text">{`© ${new Date().getFullYear()} ${constants.BRAND_NAME}`}</span>
                    </small>
                    <p className="app-footer__remark">
                        <span className="app-footer__text">Handcrafted by Dennis Chow</span>
                    </p>
                </div>
            </footer>
        </Fragment>
    );
};

export default AppFooter;
