import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../common/constants";
import AppInitializingScreen from "../app-initializing-screen/app-initializing-screen.component";
import AppHeader from "./../app-header/app-header.component";
import AppFooter from "./../app-footer/app-footer.component";
import AppSidePanel from "../app-side-panel/app-side-panel.component";

const AppContent = () => {
    return (
        <Fragment>
            <div className="app-view">
                <AppHeader />
                <main className="app-main">
                    <Outlet />
                </main>
                <AppFooter />
            </div>
            <AppSidePanel />
        </Fragment>
    )
}

const AppLayout = ({ isLoading }) => {
    return (
        <Fragment>
            <Helmet>
                <title>{CONSTANTS.BRAND_NAME}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=auto" rel="stylesheet" />
            </Helmet>

            {isLoading
                ? <AppInitializingScreen hasLogo={true} hasIndicator={true} hasSkeleton={true} />
                : <AppContent />
            }
        </Fragment>
    );
};

export default AppLayout;
