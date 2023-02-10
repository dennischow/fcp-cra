import { Fragment, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

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
        axios.get(CONSTANTS.ENNDPOINT.projects)
            .then((response) => {
                setProjectEntries(response.data);
                console.log("Finally", CONSTANTS.ENNDPOINT.projects);
            })
            .catch((error) => {
                setProjectEntries([]);
                console.log(error);
            });
        return () => {}
    }, []);

    useEffect(() => {
        axios.get(CONSTANTS.ENNDPOINT.articles)
            .then((response) => {
                setArticleEntries(response.data);
                console.log("Finally", CONSTANTS.ENNDPOINT.articles);
            })
            .catch((error) => {
                setArticleEntries([]);
                console.log(error);
            });
        return () => {}
    }, []);

    useEffect(() => {
        axios.get(CONSTANTS.ENNDPOINT.testimonials)
            .then((response) => {
                setTestimonialEntries(response.data);
                console.log("Finally", CONSTANTS.ENNDPOINT.testimonials);
            })
            .catch((error) => {
                setTestimonialEntries([]);
                console.log(error);
            })
        return () => {}
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
