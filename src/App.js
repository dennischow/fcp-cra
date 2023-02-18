import { Fragment, useEffect, useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import "./App.scss";

import * as CONSTANTS from "./common/constants";
import { AppContext } from "./contexts/appContext";
import AppLoader from "./components/app-loader/app-loader.component";
import AppLayout from "./components/app-layout/app-layout.component";
import AppNavigateToTop from "./components/app-navigate-to-top/app-navigate-to-top.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import ProjectsOverview from "./routes/projects/projects-overview/projects-overview.component";
import ProjectsDetails from "./routes/projects/projects-details/projects-details.component"
import ArticlesOverview from "./routes/articles/articles-overview/articles-overview.component";
import ArticlesDetails from "./routes/articles/articles-details/articles-details.component";
import NotFound from "./routes/error/not-found/not-found.component";

function App() {

    const { setProjectEntries, setArticleEntries, setTestimonialEntries } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.all([
                axios.get(CONSTANTS.ENNDPOINT.projects),
                axios.get(CONSTANTS.ENNDPOINT.articles),
                axios.get(CONSTANTS.ENNDPOINT.testimonials),
            ])
            .then((responses) => {
                setProjectEntries(responses[0].data);
                setArticleEntries(responses[1].data);
                setTestimonialEntries(responses[2].data);
                return responses;
            }).
            then((responses) => {
                console.log("Data fetched!!!");
                console.log("projectEntries:", responses[0].data);
                console.log("articleEntries:", responses[1].data);
                console.log("testimonialEntries:", responses[2].data);
                setTimeout(() => setIsLoading(false), 400);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Fragment>
            {isLoading && <AppLoader hasLogo={true} hasIndicator={true} hasSkeleton={true} />}
            <AppNavigateToTop />
            <Routes>
                <Route path="/" element={<AppLayout />}>
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
