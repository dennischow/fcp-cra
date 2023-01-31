import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import AppLayout from "./components/app-layout/app-layout.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";

function App() {
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
