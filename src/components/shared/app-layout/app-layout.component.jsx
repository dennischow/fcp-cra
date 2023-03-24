import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../../common/constants";
import AppHeader from "./../app-header/app-header.component";
import AppStatistics from "../app-statistics/app-statistics.component";
import AppFooter from "./../app-footer/app-footer.component";
import AppSidePanel from "../app-side-panel/app-side-panel.component";

const AppLayout = ({ children }) => {
    return (
        <Fragment>
            <Helmet>
                <title>{CONSTANTS.BRAND_NAME}</title>
            </Helmet>

            <div className="app-view">
                <AppHeader />
                <main className="app-main">
                    {children}
                </main>
                <AppStatistics />
                <AppFooter />
            </div>

            <AppSidePanel />
        </Fragment>
    );
};

export default AppLayout;
