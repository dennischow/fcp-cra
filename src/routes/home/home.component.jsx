import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import heroBackgroundImg from "../../resources/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <div className="page-home">
                <AppHeroBanner
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>Just</span> <span>a Front-End</span> <span>Web Developer</span>"
                    subHeading="Who cares about things that users see and interact with"
                />
                <h2>Home</h2>
            </div>
        </Fragment>
    );
};

export default Home;
