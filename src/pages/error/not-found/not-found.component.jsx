import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./not-found.styles.scss";
import * as CONSTANTS from "../../../common/constants.js";
import AppLayout from "../../../components/shared/app-layout/app-layout.component";

const NotFound = () => {
    return (
        <AppLayout>
            <Helmet>
                <title>{`Page not found | ${CONSTANTS.BRAND_NAME}`}</title>
            </Helmet>

            <div className="page-not-found">
                <div className="not-found">
                    <div className="not-found__container app-container">
                        <div className="not-found__content">
                            <p className="not-found__status">Don’t drink and drive, and you’ll stay alive</p>
                            <h1 className="not-found__message">404 page not found</h1>
                            <h2 className="not-found__choice">
                                You gotta go{" "}
                                <Link className="not-found__link" to={CONSTANTS.ROUTES.home.path}>
                                    home
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default NotFound;
