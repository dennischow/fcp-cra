import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import AppStatistics from "../../components/app-statistics/app-statistics.component";
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

                <div className="section recent-articles">
                    <div className="recent-articles__container">
                        <div className="recent-articles__header">
                            <h2 className="recent-articles__header-title">Recent article posts</h2>
                            <p className="recent-articles__header-des">A casual corner to share what's on my mind. Come hang!</p>
                            <a className="recent-articles__header-link" href="#">View all post</a>
                        </div>
                        <div className="recent-articles__entries">
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                            <div className="recent-articles__entry">
                                <a className="recent-articles__entry-link" href="#">How Lo-Fi Music Can Improve Your Focus When Working From Home</a>
                                <small className="recent-articles__entry-info">
                                    <time className="recent-articles__entry-date">[Time]</time> | <span className="recent-articles__entry-views">[Views]</span>
                                </small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section passionate-hilite">
                    <div className="passionate-hilite__container">
                        <div className="passionate-hilite__teaser">
                            <h2 className="passionate-hilite__teaser-title">Passionate</h2>
                            <p className="passionate-hilite__teaser-des">I have a passion. Want to know what it is? Come check it out.</p>
                            <a className="passionate-hilite__teaser-link" href="#">Learn more</a>
                        </div>
                        <div className="passionate-hilite__interests">
                            <div className="passionate-hilite__interest">
                                <p className="passionate-hilite__interest-icon">+</p>
                                <p className="passionate-hilite__interest-text">Code</p>
                            </div>
                            <div className="passionate-hilite__interest">
                                <p className="passionate-hilite__interest-icon">+</p>
                                <p className="passionate-hilite__interest-text">Design</p>
                            </div>
                            <div className="passionate-hilite__interest">
                                <p className="passionate-hilite__interest-icon">+</p>
                                <p className="passionate-hilite__interest-text">Music</p>
                            </div>
                        </div>
                    </div>
                </div>

                <AppStatistics />

            </div>
        </Fragment>
    );
};

export default Home;
