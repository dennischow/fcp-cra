import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../common/constants";
import AppHeader from "./../app-header/app-header.component";
import AppFooter from "./../app-footer/app-footer.component";

const AppLayout = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{CONSTANTS.BRAND_NAME}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=auto" rel="stylesheet" />
            </Helmet>
            <div className="app-view">
                <AppHeader />
                <main className="app-main">
                    <Outlet />
                </main>
                <AppFooter />
            </div>
        </Fragment>
    );
};

export default AppLayout;
