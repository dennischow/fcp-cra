import { Fragment } from "react";

import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search";
import "./app-side-panel.styles.scss";

const AppSidePanel = () => {
    return (
        <Fragment>
            <div className="app-side-panel">
                <AppPanelArticlesSearch />
            </div>
        </Fragment>
    );
};

export default AppSidePanel;
