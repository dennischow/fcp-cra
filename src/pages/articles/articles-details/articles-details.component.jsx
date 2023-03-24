import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { FaArrowLeft } from "react-icons/fa";

import "./articles-details.styles.scss";
import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { appContext } from "../../../contexts/app-context";
import AppLayout from "../../../components/shared/app-layout/app-layout.component";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner.component";

const ArticlesDetails = () => {
    const { articleEntries } = useContext(appContext);
    const [currentPost, setCurrentPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const { entryId } = useParams();
    const navigate = useNavigate();
    const postContentRef = useRef(null);

    const getRelatedPosts = (entry) => {
        const result = entry?.related_post?.map((id) => articleEntries.find((article) => article.entry_id === id)).filter((post) => post !== undefined);
        console.log("relatedPosts:", result);
        return result;
    }

    const postContentManipulation = () => {
        const iframeElements = postContentRef?.current?.querySelectorAll("iframe") || [];
        if (iframeElements.length) {
            iframeElements.forEach((iframeElement) => {
                const mediaEmbedWrapper = document.createElement("div");
                mediaEmbedWrapper.classList.add("media-embed", "media-embed--aspect-16by9");
                iframeElement.classList.add("media-embed__media-item");
                iframeElement?.parentNode?.insertBefore(mediaEmbedWrapper, iframeElement);
                mediaEmbedWrapper.appendChild(iframeElement);
            });
        }
        console.log("postContentManipulation ran");
    };

    useEffect(() => {
        if (!articleEntries?.length) return;

        const entry = articleEntries?.find((article) => article.url_title === entryId);

        if (!entry) {
            console.error("Invalid entryId");
            navigate(CONSTANTS.ROUTES.notFound.path, { replace: true });
            return;
        }

        console.log("entry:", entry);
        setCurrentPost(entry);

        const relatedPosts = getRelatedPosts(entry);
        setRelatedPosts(relatedPosts);
    }, [articleEntries, entryId, navigate]);

    useEffect(() => {
        if (currentPost) {
            postContentManipulation();
        }
    }, [currentPost]);

    return (
        <AppLayout>
            <Helmet>
                <title>{`${currentPost?.title} | Articles Details | ${CONSTANTS.BRAND_NAME}`}</title>
            </Helmet>

            <div className="page-articles-details">
                <AppFeatureBanner
                    type="info"
                    heroBackgroundUrl={currentPost?.thumb_image ? currentPost?.thumb_image : currentPost?.thumb_image_hotlink}
                    heading={currentPost?.title}
                    subHeading={UTILS.convertToFormatDate(currentPost?.entry_date)}
                />

                <div className="article-details">
                    <div className="article-details__container app-container">

                        <div className="article-details__wrapper">
                            <div className="article-details__post">
                                <div className="article-details__post-content"
                                    ref={postContentRef}
                                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentPost?.blog_body, { ADD_TAGS: ["iframe"] })}}>
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
                                        <Link to={CONSTANTS.ROUTES.articlesOverview.path}>
                                            <FaArrowLeft /> Back to articles overview
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ArticlesDetails;
