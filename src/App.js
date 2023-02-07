import { Fragment, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./variable.scss";
import "./App.scss";

import * as CONSTANTS from "./common/constants";
import { AppContext } from "./contexts/appContext";
import AppLayout from "./components/app-layout/app-layout.component";
import AppNavigateToTop from "./components/app-navigate-to-top/app-navigate-to-top.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";

function App() {

    const { setProjectEntries, setArticleEntries, setTestimonialEntries } = useContext(AppContext);

    useEffect(() => {
        fetch(CONSTANTS.ENNDPOINT.projects)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setProjectEntries(actualData);
            })
            .catch((err) => {
                setProjectEntries([]);
                console.log(err);
            })
            .finally(() => {
                console.log("Finally", CONSTANTS.ENNDPOINT.projects);
            });
    }, []);

    useEffect(() => {
        fetch(CONSTANTS.ENNDPOINT.articles)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setArticleEntries(actualData);
            })
            .catch((err) => {
                setArticleEntries([]);
                console.log(err);
            })
            .finally(() => {
                console.log("Finally", CONSTANTS.ENNDPOINT.articles);
            });
    }, []);

    useEffect(() => {
        fetch(CONSTANTS.ENNDPOINT.testimonials)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`This is an HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setTestimonialEntries(actualData);
            })
            .catch((err) => {
                setTestimonialEntries([]);
                console.log(err);
            })
            .finally(() => {
                console.log("Finally", CONSTANTS.ENNDPOINT.testimonials);
            });
    }, []);

    return (
        <Fragment>
            <AppNavigateToTop />
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
