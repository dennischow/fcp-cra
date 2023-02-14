import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import * as UTILS from "../../common/utils";
import { AppContext } from "../../contexts/appContext";
import AppHeroBanner from "../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../components/app-statistics/app-statistics.component";

import "./articles.styles.scss";

const Projects = () => {
    const { articleEntries } = useContext(AppContext);
    const [articlesFilteredByPerPortion, setArticlesFilteredByPerPortion] = useState(articleEntries);

    const entriesPerPage = 24;
    const totalEntriesCountRef = useRef(0);
    const currentPageNumberRef = useRef(1);
    const totalPageNumberRef = useRef(0);
    const rangeStartsRef = useRef(0);
    const rangeEndsRef = useRef(entriesPerPage);

    useEffect(() => {
        updateArticles();
        totalEntriesCountRef.current = articleEntries.length;
        totalPageNumberRef.current = Math.ceil(totalEntriesCountRef.current / entriesPerPage);
        return () => {};
    }, [articleEntries]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return () => {};
    }, [articlesFilteredByPerPortion]);

    const updateArticles = () => {
        const result = articleEntries.slice(rangeStartsRef.current, rangeEndsRef.current);
        setArticlesFilteredByPerPortion(result);
        console.log(currentPageNumberRef.current);
    }

    const articlesRangeHandler = (event, action) => {
        event.preventDefault();
        if (action === "previous") {
            rangeStartsRef.current = rangeStartsRef.current - entriesPerPage;
            rangeEndsRef.current = rangeEndsRef.current - entriesPerPage;
            currentPageNumberRef.current--;
        }
        if (action === "next") {
            rangeStartsRef.current = rangeStartsRef.current + entriesPerPage;
            rangeEndsRef.current = rangeEndsRef.current + entriesPerPage;
            currentPageNumberRef.current++;
        }
        updateArticles();
        console.log(totalEntriesCountRef.current);
        console.log(`${rangeStartsRef.current} - ${rangeEndsRef.current}`);
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
                                <span className="articles-block__page-indicator-display">
                                    {`page ${currentPageNumberRef.current} of ${totalPageNumberRef.current}`}
                                </span>
                                <button className="articles-block__page-indicator-button articles-block__page-indicator-button--previous"
                                    disabled={currentPageNumberRef.current <= 1}
                                    onClick={(event) => articlesRangeHandler(event, "previous")}>
                                    <FaAngleLeft />
                                </button>
                                <button className="articles-block__page-indicator-button articles-block__page-indicator-button--next"
                                    disabled={currentPageNumberRef.current >= totalPageNumberRef.current}
                                    onClick={(event) => articlesRangeHandler(event, "next")}>
                                    <FaAngleRight />
                                </button>
                            </p>
                        )}

                        <div className="articles-block__entries">
                            {articlesFilteredByPerPortion.length > 0 && articlesFilteredByPerPortion.map((item, index) => (
                                <div className="articles-block__entry" key={item.entry_id}>
                                    <div
                                        className="articles-block__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumb_image ? item.thumb_image : item.thumb_image_hotlink})`}}></div>
                                    <a className="articles-block__entry-link" href="#">
                                        {item.title}
                                    </a>
                                    <small className="articles-block__entry-info">
                                        <time className="articles-block__entry-date">
                                            {UTILS.convertToRelativeDate(item.entry_date)}
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
                                disabled={currentPageNumberRef.current <= 1}
                                onClick={(event) => articlesRangeHandler(event, "previous")}>
                                Previous
                            </button>
                            <button
                                className="app-cta app-cta--gray"
                                disabled={currentPageNumberRef.current >= totalPageNumberRef.current}
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
