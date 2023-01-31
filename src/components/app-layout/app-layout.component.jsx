import { Outlet } from "react-router-dom";

import AppHeader from "./../app-header/app-header.component";
import AppFooter from "./../app-footer/app-footer.component";

const AppLayout = () => {
    return (
        <div className="app-view">
            <AppHeader />
            <main className="app-main">
                <Outlet />
            </main>
            <AppFooter />
        </div>
    );
};

export default AppLayout;
