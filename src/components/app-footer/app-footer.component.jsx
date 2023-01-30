import { Fragment } from "react";
import "./app-footer.styles.scss";

const AppFooter = ({ props, ...otherProps }) => {
    return (
        <Fragment>
            <footer className="app-footer">
                <div className="app-footer__container container-fluid">
                    <small className="app-footer__copyright-info">
                        <span className="app-footer__text">©{new Date().getFullYear()} Brand Name</span>
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
