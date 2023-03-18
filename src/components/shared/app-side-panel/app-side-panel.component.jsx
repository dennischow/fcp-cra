import { Fragment, useContext } from "react";

import "./app-side-panel.styles.scss";

import { appContext } from "../../../contexts/app-context";
import AppPanelContact from "../app-panel-contact/app-panel-contact.component";
import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search.component";

const AppSidePanel = () => {
    const { isPanelContactShow, isPanelSearchShow } = useContext(appContext);

    return (
        <Fragment>
            {(isPanelContactShow || isPanelSearchShow) && (
                <div className="app-side-panel">
                    <div className="app-side-panel__inner">
                        {isPanelContactShow && <AppPanelContact />}
                        {isPanelSearchShow && <AppPanelArticlesSearch />}
                    </div>
                    <div className="app-side-panel__overlay"></div>
                </div>
            )}
        </Fragment>
    );
};

export default AppSidePanel;
