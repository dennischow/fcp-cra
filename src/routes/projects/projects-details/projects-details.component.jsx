import { Fragment, useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";

import "./projects-details.styles.scss";
import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { appContext } from "../../../contexts/app-context";
import useWindowVisibility from "../../../hooks/use-window-visibility";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner.component";

const ProjectsDetails = () => {
    const { projectEntries } = useContext(appContext);
    const [currentPost, setCurrentPost] = useState(null);
    const { entryId } = useParams();
    const navigate = useNavigate();

    const windowVisibility = useWindowVisibility();
    const pageTitle = windowVisibility ? `${currentPost?.title} | Project Details | ${CONSTANTS.BRAND_NAME}` : CONSTANTS.AWAY_PAGE_TITLE;

    useEffect(() => {
        if (!projectEntries?.length) return;

        const entry = projectEntries?.find((project) => project.url_title === entryId);

        if (!entry) {
            console.error("Invalid entryId");
            navigate(CONSTANTS.ROUTES.notFound.path, { replace: true });
            return;
        }

        console.log("entry:", entry);
        setCurrentPost(entry);
    }, [projectEntries, entryId, navigate]);

    return (
        <Fragment>
            <Helmet defer={false}>
                <title>{pageTitle}</title>
            </Helmet>

            <div className="page-projects-details">
                <AppFeatureBanner
                    type="info"
                    heroBackgroundUrl={currentPost?.thumbnail}
                    heading={currentPost?.title}
                    subHeading={UTILS.convertProjectCatIdToName(currentPost?.channel_id)}
                />

                <div className="project-details">
                    <div className="project-details__container app-container">

                        <div className="project-details__wrapper">
                            <div className="project-details__visual">
                                <figure className="project-details__visual-figure">
                                    {currentPost?.full_image?.map((item, index) => (
                                        <img className="project-details__visual-image"
                                            key={index}
                                            src={item.image}
                                            alt={`${currentPost?.title} screenshot ${index + 1} of ${currentPost?.full_image.length}`} />
                                    ))}
                                </figure>
                            </div>

                            <div className="project-details__info">
                                <div className="project-details__info-content">
                                    <p className="project-details__info-subject">Description:</p>
                                    <div className="project-details__info-description"
                                        dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentPost?.description)}}>
                                    </div>
                                    <p className="project-details__info-subject">Year:</p>
                                    <p className="project-details__info-description">{currentPost?.project_date}</p>
                                    <p className="project-details__info-subject">Produced with:</p>
                                    <p className="project-details__info-description">{currentPost?.language_software}</p>
                                    {currentPost?.visit_url && (
                                        <Fragment>
                                            <p className="project-details__info-subject">Demo :</p>
                                            <p className="project-details__info-description">
                                                <a className="project-details__info-live-demo-link"
                                                    href={currentPost?.visit_url}
                                                    target="_blank"
                                                    title="Open in new window"
                                                    rel="noopener noreferrer">
                                                        {currentPost?.visit_url}
                                                </a>
                                            </p>
                                        </Fragment>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectsDetails;
