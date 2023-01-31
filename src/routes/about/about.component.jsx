import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import heroBackgroundImg from "../../resources/images/about/double-colors-exposure.jpg";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="page-about">

                <AppHeroBanner
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>It'S time to</span> <span>introduce</span> <span>myself</span>"
                    subHeading="Let's get it started"
                />

                <div className="container">
                    <h2>About</h2>
                </div>

            </div>
        </Fragment>
    );
};

export default About;
