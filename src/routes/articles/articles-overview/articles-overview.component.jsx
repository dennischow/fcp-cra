import { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./articles-overview.styles.scss";
import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { appContext } from "../../../contexts/app-context";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner.component";

const ArticlesOverview = () => {
    const { articleEntries } = useContext(appContext);
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
    }, [articleEntries]);

    useEffect(() => {
        updateArticlesRange();
        paginationTracking();
    }, [currentPageNumber, totalPageNumber]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                <title>{`Articles Overview | ${CONSTANTS.BRAND_NAME}`}</title>
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
                            <p className="articles-block__pagination">
                                <span className="articles-block__pagination-display">
                                    {`page ${currentPageNumber} of ${totalPageNumber}`}
                                </span>
                                <button className="articles-block__pagination-button articles-block__pagination-button--previous"
                                    disabled={!isPrevEnabled}
                                    onClick={(event) => pageSwitchHandler(event, "previous")}>
                                    <FaAngleLeft />
                                </button>
                                <button className="articles-block__pagination-button articles-block__pagination-button--next"
                                    disabled={!isNextEnabled}
                                    onClick={(event) => pageSwitchHandler(event, "next")}>
                                    <FaAngleRight />
                                </button>
                            </p>
                        )}

                        <div className="articles-block__entries">
                            {articlesFilteredByPerPortion.length > 0 && articlesFilteredByPerPortion.map((item, index) => (
                                <Link className="articles-block__entry" key={item.entry_id} to={`${CONSTANTS.ROUTES.articlesDetails.path}/${item.url_title}`}>
                                    <div
                                        className="articles-block__entry-visual"
                                        role="img"
                                        style={{backgroundImage: `url(${item.thumb_image ? item.thumb_image : item.thumb_image_hotlink})`}}></div>
                                    <div className="articles-block__entry-title">
                                        {item.title}
                                    </div>
                                    <small className="articles-block__entry-info">
                                        <time className="articles-block__entry-date">
                                            {UTILS.convertToRelativeDate(item.entry_date)}
                                        </time>
                                        {/* {" "} | {" "}
                                        <span className="articles-block__entry-views">[Views]</span> */}
                                    </small>
                                </Link>
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
            </div>
        </Fragment>
    );
};

export default ArticlesOverview;
