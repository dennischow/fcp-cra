import { Fragment, useEffect, useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./App.scss";

import * as CONSTANTS from "./common/constants";
import * as HELPERS from "./common/helpers";
import { appContext } from "./contexts/app-context";
import api from "./services/api";
import AppInitializingScreen from "./components/shared/app-initializing-screen/app-initializing-screen.component";
import AppNavigateToTop from "./components/shared/app-navigate-to-top/app-navigate-to-top.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import ProjectsOverview from "./pages/projects/projects-overview/projects-overview.component";
import ProjectsDetails from "./pages/projects/projects-details/projects-details.component"
import ArticlesOverview from "./pages/articles/articles-overview/articles-overview.component";
import ArticlesDetails from "./pages/articles/articles-details/articles-details.component";
import NotFound from "./pages/error/not-found/not-found.component";

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
            <Helmet>
                <title>{CONSTANTS.BRAND_NAME}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=auto" rel="stylesheet" />
            </Helmet>

            <AppNavigateToTop />

            {isLoading ? (
                <AppInitializingScreen hasLogo={true} hasIndicator={true} hasSkeleton={true} />
            ) : (
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
            )}
        </Fragment>
    );
}

export default App;
