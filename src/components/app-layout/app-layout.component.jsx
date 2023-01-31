import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as constants from "../../app.constant";
import AppHeader from "./../app-header/app-header.component";
import AppFooter from "./../app-footer/app-footer.component";

const AppLayout = () => {
    return (
        <Fragment>
            <Helmet>
                <title>{constants.BRAND_NAME}</title>
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
