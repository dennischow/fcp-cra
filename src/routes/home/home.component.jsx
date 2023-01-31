import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import heroBackgroundImg from "../../resources/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

import "./home.styles.scss";

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Homepage</title>
            </Helmet>
            <div className="page-home">

                <AppHeroBanner
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>Just a</span> <span>Front-End</span> <span>Web Developer</span>"
                    subHeading="Who cares about things that users see and interact with"
                />

                <div className="section projects-hilite">
                    <div className="projects-hilite__container">
                        <div className="projects-hilite__teaser">
                            <h2 className="projects-hilite__teaser-title">Creativity</h2>
                            <p className="projects-hilite__teaser-des">There are different ways to be creative. Find out what mine are.</p>
                            <a className="projects-hilite__teaser-link" href="#">Check it out</a>
                        </div>
                        <div className="projects-hilite__entries">
                            <div className="projects-hilite__entry">
                                <p className="projects-hilite__entry-cat">Web Development / Design</p>
                                <a className="projects-hilite__entry-link" href="#">Frank.co.th - Online Insurance Platform</a>
                            </div>
                            <div className="projects-hilite__entry">
                                <p className="projects-hilite__entry-cat">Web Development / Design</p>
                                <a className="projects-hilite__entry-link" href="#">Frank.co.th - Online Insurance Platform</a>
                            </div>
                            <div className="projects-hilite__entry">
                                <p className="projects-hilite__entry-cat">Web Development / Design</p>
                                <a className="projects-hilite__entry-link" href="#">Frank.co.th - Online Insurance Platform</a>
                            </div>
                            <div className="projects-hilite__entry">
                                <p className="projects-hilite__entry-cat">Web Development / Design</p>
                                <a className="projects-hilite__entry-link" href="#">Frank.co.th - Online Insurance Platform</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default Home;
