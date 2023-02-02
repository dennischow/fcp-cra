import { Fragment, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./variable.scss";
import "./App.scss";

import * as CONSTANTS from "./common/constants";
import { AppContext } from "./contexts/appContext";
import AppLayout from "./components/app-layout/app-layout.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";

function App() {

    const { setProjectEntries, setArticleEntries } = useContext(AppContext);

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
                console.log("Finally")
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
                console.log("Finally")
            });
    }, []);

    return (
        <Fragment>
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
