import { Fragment, useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { AppContext } from "../../../contexts/appContext";
import AppFeatureBanner from "../../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../../components/app-statistics/app-statistics.component";

import "./articles-details.styles.scss";

const ArticlesDetails = () => {
    const { articleEntries } = useContext(AppContext);
    const [particularPost, setPost] = useState({});
    const [relatedPosts, setRelatedPosts] = useState([]);
    const { entryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (articleEntries.length) {
            const result = articleEntries.find((articles) => articles.url_title === entryId);
            console.log(result);
            setPost(result);

            const tempRelatedPostsId = result?.related_post;
            const tempRelatedPosts = tempRelatedPostsId?.map((id) => articleEntries.find((articles) => articles.entry_id === id)).filter((post) => post !== undefined);
            setRelatedPosts(tempRelatedPosts);
        }
        return () => {};
    }, [articleEntries, entryId]);

    useEffect(() => {
        if (particularPost === undefined) {
            console.error("Invalid entryId");
            navigate(CONSTANTS.ROUTES.notFound.path, {replace: true});
        }
        return () => {};
    }, [particularPost]);

    return (
        <Fragment>
            <Helmet>
                <title>{`${particularPost?.title} | Articles Details`}</title>
            </Helmet>

            <div className="page-articles-details">
                <AppFeatureBanner
                    type="info"
                    heroBackgroundUrl={particularPost?.thumb_image ? particularPost?.thumb_image : particularPost?.thumb_image_hotlink}
                    heading={particularPost?.title}
                    subHeading={UTILS.convertToFormatDate(particularPost?.entry_date)}
                />

                <div className="article-details">
                    <div className="article-details__container app-container">

                        <div className="article-details__wrapper">
                            <div className="article-details__post">
                                <div className="article-details__post-content">
                                    <div dangerouslySetInnerHTML={{__html: particularPost?.blog_body}}></div>
                                </div>
                            </div>
                            <div className="article-details__sidebar">
                                <div className="article-details__sidebar-content">
                                    <h3 className="article-details__sidebar-header">You may also be interested in:</h3>
                                    <ul className="article-details__related-list">
                                        {relatedPosts && relatedPosts.map((item, index) => (
                                            <li className="article-details__related-item" key={`related-post-${item?.entry_id}`}>
                                                <div className="article-details__related-visual"
                                                    role="img"
                                                    style={{backgroundImage: `url(${item?.thumb_image ? item?.thumb_image : item?.thumb_image_hotlink})`}}>
                                                </div>
                                                <p className="article-details__related-title">
                                                    <Link className="article-details__related-title-link" to={`${CONSTANTS.ROUTES.articlesDetails.path}/${item?.url_title}`}>
                                                        {item?.title}
                                                    </Link>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="article-details__sidebar-overview-link">
                                        <Link to={CONSTANTS.ROUTES.articlesOverview.path}>Back to articles overview</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default ArticlesDetails;