import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import moment from "moment";
import { FaArrowRight } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import AppHeroBanner from "../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../components/app-statistics/app-statistics.component";

import "./articles.styles.scss";

const Projects = () => {
    const { articleEntries } = useContext(AppContext);
    const [articlesFilteredByPerPortion, setArticlesFilteredByPerPortion] = useState(articleEntries);

    const articlesCount = useRef(0);
    const currentPortionCount = useRef(1);
    const perPortionRef = useRef(30);
    const fromPortionRef = useRef(0);
    const toPortionRef = useRef(30);

    const convertToRelativeDate = (date) => moment(date).fromNow();

    useEffect(() => {
        updateArticles();
        articlesCount.current = articleEntries.length;
        return () => {};
    }, [articleEntries]);

    const updateArticles = () => {
        const result = articleEntries.slice(fromPortionRef.current, toPortionRef.current);
        setArticlesFilteredByPerPortion(result);
    }

    const articlesRangeHandler = (event, action) => {
        event.preventDefault();
        console.log(articlesCount.current);
        if (action === "previous" && fromPortionRef.current >= perPortionRef.current) {
            fromPortionRef.current = fromPortionRef.current - perPortionRef.current;
            toPortionRef.current = toPortionRef.current - perPortionRef.current;
            currentPortionCount.current--;
            updateArticles();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        if (action === "next" && toPortionRef.current <= articlesCount.current) {
            fromPortionRef.current = fromPortionRef.current + perPortionRef.current;
            toPortionRef.current = toPortionRef.current + perPortionRef.current;
            currentPortionCount.current++;
            updateArticles();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        console.log(`articlesRangeHandler triggered by ${action}`);
    };

    return (
        <Fragment>
            <Helmet>
                <title>Articles</title>
            </Helmet>
            <div className="page-articles">
                <AppHeroBanner
                    type="default"
                    heroBackgroundUrl={""}
                    heading="A casual corner to share what's on my mind"
                    subHeading="So random uh? It's my style"
                />

                <section className="articles-block">
                    <div className="articles-block__container">

                        {articlesFilteredByPerPortion.length > 0 && (
                            <p className="articles-block__page-indicator">
                                <span>
                                    {`page ${currentPortionCount.current} of ${Math.ceil(articlesCount.current / perPortionRef.current)}`}
                                </span>
                            </p>
                        )}

                        <div className="articles-block__entries">
                            {articlesFilteredByPerPortion.length > 0 &&
                                articlesFilteredByPerPortion.map((item, index) => (
                                    <div className="articles-block__entry" key={item.entry_id}>
                                        <div
                                            className="articles-block__entry-visual"
                                            role="img"
                                            style={{
                                                backgroundImage: `url(${
                                                    item.thumb_image ? item.thumb_image : item.thumb_image_hotlink
                                                })`,
                                            }}></div>
                                        <a className="articles-block__entry-link" href="#">
                                            {item.title}
                                        </a>
                                        <small className="articles-block__entry-info">
                                            <time className="articles-block__entry-date">
                                                {convertToRelativeDate(item.entry_date)}
                                            </time>{" "}
                                            | <span className="articles-block__entry-views">[Views]</span>
                                        </small>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {articlesFilteredByPerPortion.length > 0 && (
                        <div className="articles-block__buttons-container">
                            <button
                                className="app-cta app-cta--gray"
                                onClick={(event) => articlesRangeHandler(event, "previous")}>
                                Previous
                            </button>
                            <button
                                className="app-cta app-cta--gray"
                                onClick={(event) => articlesRangeHandler(event, "next")}>
                                Next
                            </button>
                        </div>
                    )}
                </section>

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default Projects;
