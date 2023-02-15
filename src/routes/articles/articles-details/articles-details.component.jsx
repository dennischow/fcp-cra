import { Fragment, useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../../common/constants";
import { AppContext } from "../../../contexts/appContext";
import AppFeatureBanner from "../../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../../components/app-statistics/app-statistics.component";

import "./articles-details.styles.scss";

const ArticlesDetails = () => {
    const { articleEntries } = useContext(AppContext);
    const [post, setPost] = useState({});
    const [relatedPosts, setRelatedPosts] = useState([]);
    const { entryId } = useParams();

    useEffect(() => {
        const result = articleEntries.find((articles) => articles.url_title === entryId);
        console.log(result);
        setPost(result);

        const tempRelatedPostsId = result?.related_post;
        const tempRelatedPosts = tempRelatedPostsId?.map((id) => articleEntries.find((articles) => articles.entry_id === id)).filter((post) => post !== undefined);
        console.log(tempRelatedPosts);
        setRelatedPosts(tempRelatedPosts);
        return () => {};
    }, [articleEntries, entryId]);

    return (
        <Fragment>
            <Helmet>
                <title>{`${post?.title} | Project Details`}</title>
            </Helmet>

            <div className="page-articles-details">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={post?.thumbnail}
                    heading={post?.title}
                    subHeading="Web Development / Design"
                />

                <div className="article-details">
                    <div className="article-details__container app-container">

                        <div className="article-details__wrapper">
                            <div className="article-details__post">
                                <div className="article-details__post-content">
                                    <div dangerouslySetInnerHTML={{__html: post?.blog_body}}></div>
                                </div>
                            </div>
                            <div className="article-details__sidebar">
                                <div className="article-details__sidebar-content">
                                    Sidebar
                                    <ul>
                                        {relatedPosts && relatedPosts.map((item, index) => (
                                            <li key={`related-post-${item?.entry_id}`}>
                                                <Link to={`${CONSTANTS.ROUTES.articlesDetails.path}/${item?.url_title}`}>
                                                    {item?.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
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
