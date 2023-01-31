import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="page-about">
                <h2>About</h2>
            </div>
        </Fragment>
    );
};

export default About;
