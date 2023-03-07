import { Fragment, useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import * as CONSTANTS from "./common/constants";
import * as HELPERS from "./common/helpers";
import { appContext } from "./contexts/app-context";
import api from "./services/api";
import AppLayout from "./components/shared/app-layout/app-layout.component";
import AppNavigateToTop from "./components/shared/app-navigate-to-top/app-navigate-to-top.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import ProjectsOverview from "./routes/projects/projects-overview/projects-overview.component";
import ProjectsDetails from "./routes/projects/projects-details/projects-details.component"
import ArticlesOverview from "./routes/articles/articles-overview/articles-overview.component";
import ArticlesDetails from "./routes/articles/articles-details/articles-details.component";
import NotFound from "./routes/error/not-found/not-found.component";

HELPERS.disableProductionLogging();

function App() {

    const { setProjectEntries, setArticleEntries, setTestimonialEntries } = useContext(appContext);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [projects, articles, testimonials] = await Promise.all([
                api.get.projects(),
                api.get.articles(),
                api.get.testimonials(),
            ]);

            setProjectEntries(projects.data);
            setArticleEntries(articles.data);
            setTestimonialEntries(testimonials.data);

            console.log("Data fetched!!!");
            console.log("projectEntries:", projects.data);
            console.log("articleEntries:", articles.data);
            console.log("testimonialEntries:", testimonials.data);

            setTimeout(() => setIsLoading(false), 400);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Fragment>
            <AppNavigateToTop />
            <Routes>
                <Route path="/" element={<AppLayout isLoading={isLoading} />}>
                    <Route index element={<Home />} />
                    <Route path={CONSTANTS.ROUTES.about.path} element={<About />} />
                    <Route path={CONSTANTS.ROUTES.projectsOverview.path} element={<ProjectsOverview />} />
                    <Route path={`${CONSTANTS.ROUTES.projectsDetails.path}/:entryId`} element={<ProjectsDetails />} />
                    <Route path={CONSTANTS.ROUTES.articlesOverview.path} element={<ArticlesOverview />} />
                    <Route path={`${CONSTANTS.ROUTES.articlesDetails.path}/:entryId`} element={<ArticlesDetails />} />
                    <Route path={CONSTANTS.ROUTES.notFound.path} element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
