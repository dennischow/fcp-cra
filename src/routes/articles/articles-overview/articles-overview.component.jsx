import { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { AppContext } from "../../../contexts/appContext";
import AppFeatureBanner from "../../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../../components/app-statistics/app-statistics.component";

import "./articles-overview.styles.scss";

const ArticlesOverview = () => {
    const { articleEntries } = useContext(AppContext);
    const [articlesFilteredByPerPortion, setArticlesFilteredByPerPage] = useState(articleEntries);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [totalPageNumber, setTotalPageNumber] = useState(null);
    const [isPrevEnabled, setIsPrevEnabled] = useState(false);
    const [isNextEnabled, setIsNextEnabled] = useState(false);

    const entriesPerPage = 12;

    useEffect(() => {
        setTotalPageNumber(Math.ceil(articleEntries.length / entriesPerPage));
        updateArticlesRange();
        paginationTracking();
        return () => {};
    }, [articleEntries]);

    useEffect(() => {
        updateArticlesRange();
        paginationTracking();
        return () => {};
    }, [currentPageNumber, totalPageNumber]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return () => {};
    }, [articlesFilteredByPerPortion]);

    const paginationTracking = () => {
        setIsPrevEnabled(currentPageNumber > 1);
        setIsNextEnabled(currentPageNumber < totalPageNumber);
    };

    const updateArticlesRange = () => {
        const startIndex = (currentPageNumber - 1) * entriesPerPage;
        const endIndex = currentPageNumber * entriesPerPage;
        const result = articleEntries.slice(startIndex, endIndex);
        setArticlesFilteredByPerPage(result);
    };

    const pageSwitchHandler = (event, action) => {
        event.preventDefault();
        if (action === "previous") {
            setCurrentPageNumber((preValue) => preValue - 1);
        }
        if (action === "next") {
            setCurrentPageNumber((preValue) => preValue + 1);
        }
        console.log(`pageSwitchHandler triggered by ${action}`);
    };

    return (
        <Fragment>
            <Helmet>
                <title>Articles Overview</title>
            </Helmet>
            <div className="page-articles-overview">
                <AppFeatureBanner
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
                                    {`page ${currentPageNumber} of ${totalPageNumber}`}
                                </span>
                                <button className="articles-block__page-indicator-button articles-block__page-indicator-button--previous"
                                    disabled={!isPrevEnabled}
                                    onClick={(event) => pageSwitchHandler(event, "previous")}>
                                    <FaAngleLeft />
                                </button>
                                <button className="articles-block__page-indicator-button articles-block__page-indicator-button--next"
                                    disabled={!isNextEnabled}
                                    onClick={(event) => pageSwitchHandler(event, "next")}>
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
                                    <Link className="articles-block__entry-link" to={`${CONSTANTS.ROUTES.articlesDetails.path}/${item.url_title}`}>
                                        {item.title}
                                    </Link>
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
                                disabled={!isPrevEnabled}
                                onClick={(event) => pageSwitchHandler(event, "previous")}>
                                Previous
                            </button>
                            <button
                                className="app-cta app-cta--gray"
                                disabled={!isNextEnabled}
                                onClick={(event) => pageSwitchHandler(event, "next")}>
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

export default ArticlesOverview;
