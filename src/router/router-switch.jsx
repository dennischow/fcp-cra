import { Routes, Route } from "react-router-dom";

import * as CONSTANTS from "../common/constants";
import Home from "../pages/home/home.component";
import About from "../pages/about/about.component";
import ProjectsOverview from "../pages/projects/projects-overview/projects-overview.component";
import ProjectsDetails from "../pages/projects/projects-details/projects-details.component";
import ArticlesOverview from "../pages/articles/articles-overview/articles-overview.component";
import ArticlesDetails from "../pages/articles/articles-details/articles-details.component";
import NotFound from "../pages/error/not-found/not-found.component";

const RouterSwitch = () => {
    return (
        <Routes>
            <Route path={CONSTANTS.ROUTES.home.path} element={<Home />} />
            <Route path={CONSTANTS.ROUTES.about.path} element={<About />} />
            <Route path={CONSTANTS.ROUTES.projectsOverview.path} element={<ProjectsOverview />} />
            <Route path={`${CONSTANTS.ROUTES.projectsDetails.path}/:entryId`} element={<ProjectsDetails />} />
            <Route path={CONSTANTS.ROUTES.articlesOverview.path} element={<ArticlesOverview />} />
            <Route path={`${CONSTANTS.ROUTES.articlesDetails.path}/:entryId`} element={<ArticlesDetails />} />
            <Route path={CONSTANTS.ROUTES.notFound.path} element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouterSwitch;
