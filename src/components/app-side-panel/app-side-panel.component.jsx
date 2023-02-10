import AppPanelArticlesSearch from "../app-panel-articles-search/app-panel-articles-search";
import "./app-side-panel.styles.scss";

const AppSidePanel = () => {
    return (
        <div className="app-side-panel">
            <AppPanelArticlesSearch />
        </div>
    );
};

export default AppSidePanel;
