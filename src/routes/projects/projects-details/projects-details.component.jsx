import { Fragment, useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { AppContext } from "../../../contexts/appContext";
import AppFeatureBanner from "../../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../../components/app-statistics/app-statistics.component";

import "./projects-details.styles.scss";

const ProjectsDetails = () => {
    const { projectEntries } = useContext(AppContext);
    const [particularPost, setParticularPost] = useState(null);
    const { entryId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (projectEntries.length) {
            const result = projectEntries.find((project) => project.url_title === entryId);
            console.log(result);
            setParticularPost(result);
        }
        return () => {};
    }, [projectEntries, entryId]);

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
                <title>{`${particularPost?.title} | Project Details`}</title>
            </Helmet>

            <div className="page-projects-details">
                <AppFeatureBanner
                    type="info"
                    heroBackgroundUrl={particularPost?.thumbnail}
                    heading={particularPost?.title}
                    subHeading={UTILS.convertProjectCatIdToName(particularPost?.channel_id)}
                />

                <div className="project-details">
                    <div className="project-details__container app-container">

                        <div className="project-details__wrapper">
                            <div className="project-details__visual">
                                <figure className="project-details__visual-figure">
                                    {particularPost?.full_image?.map((item, index) => (
                                        <img className="project-details__visual-image"
                                            key={index}
                                            src={item.image}
                                            alt={`${particularPost?.title} screenshot ${index + 1} of ${particularPost?.full_image.length}`}/>
                                    ))}
                                </figure>
                            </div>

                            <div className="project-details__info">
                                <div className="project-details__info-content">
                                    <p className="project-details__info-subject">Description:</p>
                                    <p className="project-details__info-description"
                                        dangerouslySetInnerHTML={{__html: particularPost?.description}}></p>
                                    <p className="project-details__info-subject">Year:</p>
                                    <p className="project-details__info-description">{particularPost?.project_date}</p>
                                    <p className="project-details__info-subject">Produced with:</p>
                                    <p className="project-details__info-description">{particularPost?.language_software}</p>
                                    {particularPost?.visit_url && (
                                        <Fragment>
                                            <p className="project-details__info-subject">Demo :</p>
                                            <p className="project-details__info-description">
                                                <a className="project-details__info-live-demo-link"
                                                    href={particularPost?.visit_url}
                                                    target="_blank"
                                                    title="Open in new window"
                                                    rel="noopener noreferrer">
                                                        {particularPost?.visit_url}
                                                </a>
                                            </p>
                                        </Fragment>
                                    )}
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

export default ProjectsDetails;
