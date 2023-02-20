import AppPanelContact from "../app-panel-contact/app-panel-contact.component";
import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search.component";

import "./app-side-panel.styles.scss";

const AppSidePanel = () => {
    return (
        <div className="app-side-panel">
            <div className="app-side-panel__inner">
                {/* <AppPanelContact /> */}
                {/* <AppPanelArticlesSearch /> */}
            </div>
            <div className="app-side-panel__overlay"></div>
        </div>
    );
};

export default AppSidePanel;
