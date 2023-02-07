import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import moment from "moment";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import TestimonialWidget from "../../components/testimonial-widget/testimonial-widget.componnet";
import AppStatistics from "../../components/app-statistics/app-statistics.component";
import heroBackgroundImg from "../../resources/images/home/polygon-colored-crossed-dark-extend-bg.jpg";

import "./home.styles.scss";

const Home = () => {

    const { projectEntries, articleEntries } = useContext(AppContext);

    const convertToRelativeDate = (date) => moment(date).fromNow();

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

                <section className="section projects-hilite">
                    <div className="projects-hilite__container">
                        <div className="projects-hilite__teaser">
                            <div className="projects-hilite-teaser-box">
                                <h2 className="projects-hilite__teaser-title">Creativity</h2>
                                <p className="projects-hilite__teaser-des">
                                    There are different ways to be creative. Find out what mine are.
                                </p>
                                <a className="projects-hilite__teaser-link app-cta app-cta--orange" href="#">
                                    Check it out
                                </a>
                            </div>
                        </div>
                        <div className="projects-hilite__entries">
                            {projectEntries.length > 0 && projectEntries.slice(0, 4).map((item, index) => (
                                <div className="projects-hilite__entry" key={item.entry_id}>
                                    <div className="projects-hilite__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumbnail})`}}>
                                    </div>
                                    <p className="projects-hilite__entry-cat">{item.channel_id}</p>
                                    <a className="projects-hilite__entry-link" href="#">
                                        {item.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section recent-articles">
                    <div className="recent-articles__container">
                        <div className="recent-articles__header">
                            <h2 className="recent-articles__header-title">Recent article posts</h2>
                            <p className="recent-articles__header-des">
                                A casual corner to share what's on my mind. Come hang!
                            </p>
                            <a className="recent-articles__header-link" href="#">
                                View all post
                            </a>
                        </div>
                        <div className="recent-articles__entries">
                            {articleEntries.length > 0 && articleEntries.slice(0, 12).map((item, index) => (
                                <div className="recent-articles__entry" key={item.entry_id}>
                                    <div className="recent-articles__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumb_image ? item.thumb_image : item.thumb_image_hotlink})`}}>
                                    </div>
                                    <a className="recent-articles__entry-link" href="#">
                                        {item.title}
                                    </a>
                                    <small className="recent-articles__entry-info">
                                        <time className="recent-articles__entry-date">{convertToRelativeDate(item.entry_date)}</time> |{" "}
                                        <span className="recent-articles__entry-views">[Views]</span>
                                    </small>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section passionate-hilite">
                    <div className="passionate-hilite__container">
                        <div className="passionate-hilite__teaser">
                            <div className="passionate-hilite-teaser-box">
                                <h2 className="passionate-hilite__teaser-title">Passionate</h2>
                                <p className="passionate-hilite__teaser-des">
                                    I have a passion. Want to know what it is? Come check it out.
                                </p>
                                <Link className="passionate-hilite__teaser-link app-cta app-cta--orange" to={CONSTANTS.ROUTES.about.path}>
                                    Learn more
                                </Link>
                            </div>
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
                </section>

                <TestimonialWidget isContentExpandedByDefault={false} enteriesLimitByDefault={6} />

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default Home;
