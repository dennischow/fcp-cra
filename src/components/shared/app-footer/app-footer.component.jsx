import * as CONSTANTS from "../../../common/constants";
import "./app-footer.styles.scss";

const AppFooter = ({ props, ...otherProps }) => {
    return (
        <footer className="app-footer">
            <div className="app-footer__container">
                <small className="app-footer__copyright-info">
                    <span className="app-footer__text">{`© 2011-${new Date().getFullYear()} ${CONSTANTS.BRAND_NAME}`}</span>
                </small>
                <p className="app-footer__remark">
                    <span className="app-footer__text">{`Handcrafted by ${CONSTANTS.AUTHOR}`} 🤘🏼</span>
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;
