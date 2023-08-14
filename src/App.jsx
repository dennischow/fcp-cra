import { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import "./App.scss";

import * as CONSTANTS from "./common/constants";
import * as HELPERS from "./common/helpers";
import useEntriesStore from "./store/entries";
import api from "./services/api";
import AppInitializingScreen from "./components/shared/app-initializing-screen/app-initializing-screen.component";
import RouterSwitch from "./router/router-switch";

HELPERS.disableProductionLogging();

const App = () => {
    const { setProjectEntries, setArticleEntries, setTestimonialEntries } = useEntriesStore();
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    const navigationType = useNavigationType();

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

    useEffect(() => {
        if (navigationType !== "POP") {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            console.log("AppNavigateToTop: Window scroll to top instantly:", navigationType);
        }
    }, [location]);

    return (
        <Fragment>
            <Helmet>
                <title>{CONSTANTS.BRAND_NAME}</title>
            </Helmet>

            {isLoading
                ? <AppInitializingScreen hasLogo={true} hasIndicator={true} hasSkeleton={true} />
                : <RouterSwitch />
            }
        </Fragment>
    );
}

export default App;
