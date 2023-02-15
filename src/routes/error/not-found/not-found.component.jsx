import { Link } from "react-router-dom";

import * as CONSTANTS from "../../../common/constants.js";
import "./not-found.styles.scss";

const NotFound = () => {
    return (
        <div className="page-not-found">

            <div className="not-found__col">
                <div className="not-found__box">
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
    );
};

export default NotFound;
