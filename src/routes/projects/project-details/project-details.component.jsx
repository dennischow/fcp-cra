import { Fragment, useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../../common/constants";
import { AppContext } from "../../../contexts/appContext";
import AppFeatureBanner from "../../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../../components/app-statistics/app-statistics.component";

import "./project-details.styles.scss";

const ProjectDetails = () => {
    const { projectEntries } = useContext(AppContext);
    const [particularProject, setParticularProject] = useState(null);
    const { entryId } = useParams();

    useEffect(() => {
        const result = projectEntries.find((project) => project.url_title === entryId);
        console.log(result);
        setParticularProject(result);
        return () => {};
    }, [projectEntries]);

    return (
        <Fragment>
            <Helmet>
                <title>{`${particularProject?.title} | Project Details`}</title>
            </Helmet>

            <div className="page-project-details">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={particularProject?.thumbnail}
                    heading={particularProject?.title}
                    subHeading="Web Development / Design"
                />

                <div className="project-details">
                    <div className="project-details__container app-container">

                        <div className="project-details__wrapper">
                            <div className="project-details__visual">
                                <figure className="project-details__visual-figure">
                                    {particularProject?.full_image?.map((item, index) => (
                                        <img className="project-details__visual-image"
                                            key={index}
                                            src={item.image}
                                            alt={`picture of ${particularProject?.title} screenshot ${index + 1} of ${particularProject?.full_image.length}`}/>
                                    ))}
                                </figure>
                            </div>

                            <div className="project-details__info">
                                <div className="project-details__info-content">
                                    <p className="project-details__info-subject">Description:</p>
                                    <p className="project-details__info-description"
                                        dangerouslySetInnerHTML={{__html: particularProject?.description}}></p>
                                    <p className="project-details__info-subject">Year:</p>
                                    <p className="project-details__info-description">{particularProject?.project_date}</p>
                                    <p className="project-details__info-subject">Produced with:</p>
                                    <p className="project-details__info-description">{particularProject?.language_software}</p>
                                    {particularProject?.visit_url && (
                                        <Fragment>
                                            <p className="project-details__info-subject">Demo :</p>
                                            <p className="project-details__info-description">
                                                <a className="project-details__info-live-demo-link"
                                                    href={particularProject?.visit_url}
                                                    target="_blank"
                                                    title="Open in new window"
                                                    rel="noopener noreferrer">{particularProject?.visit_url}</a>
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

export default ProjectDetails;
