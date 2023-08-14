import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./app-side-panel.styles.scss";

import useUIStore from "../../../store/ui";
import AppPanelContact from "../app-panel-contact/app-panel-contact.component";
import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search.component";

const AppSidePanel = () => {
    const { isPanelContactShow, isPanelSearchShow, setIsPanelSearchShow } = useUIStore();
    const location = useLocation();

    useEffect(() => {
        setIsPanelSearchShow(false);
    }, [location.pathname]);

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
