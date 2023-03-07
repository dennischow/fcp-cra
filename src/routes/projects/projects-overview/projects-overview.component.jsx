import { Fragment, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

import "./projects-overview.styles.scss";
import * as CONSTANTS from "../../../common/constants";
import * as UTILS from "../../../common/utils";
import { appContext } from "../../../contexts/app-context";
import AppFeatureBanner from "../../../components/shared/app-feature-banner/app-feature-banner.component";

const ProjectsOverview = () => {
    const { projectEntries } = useContext(appContext);
    const [projectsFilteredByCategory, setProjectsFilteredByCategory] = useState(projectEntries);
    const [activeCategoryId, setActiveCategoryId] = useState(4);
    const categoryTabsList = [
        {
            id: 4,
            text: "Web Projects",
            definition: "thinking + coding",
        },
        {
            id: 5,
            text: "Print Projects",
            definition: "layout + cmyk",
        },
        {
            id: 6,
            text: "Tee Projects",
            definition: "creativity + production",
        },
    ];

    useEffect(() => {
        categoryToShow(activeCategoryId);
    }, [projectEntries]);

    const getCategoryListElementClassName = (isActive) => {
        const classNames = ["projects-category__list-item"];
        if (isActive) {
            classNames.push("projects-category__list-item--active");
        }
        return classNames.join(" ");
    };

    const categoryToShow = (catId) => {
        const result = projectEntries.filter((item) => {
            return item.channel_id === catId;
        });
        setProjectsFilteredByCategory(result);
    };

    const categorySelectHandler = (event, catId) => {
        setActiveCategoryId(catId);
        categoryToShow(catId);
        console.log(event.target, catId);
    };

    return (
        <Fragment>
            <Helmet>
                <title>Projects Overview</title>
            </Helmet>
            <div className="page-projects-overview">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={""}
                    heading="Nowadays I focus on front-end web development"
                    subHeading="Let my work samples speak on my behalf"
                />

                <div className="projects-category">
                    <div className="projects-category__container">
                        <ul className="projects-category__list" role="tablist">
                            {categoryTabsList.map((item, index) => (
                                <li className={getCategoryListElementClassName(activeCategoryId === item.id)} key={item.id} role="tab">
                                    <button
                                        className="projects-category__btn"
                                        onClick={(event) => categorySelectHandler(event, item.id)}>
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="projects-intro">
                    <div className="projects-intro__container">
                        {projectsFilteredByCategory.length > 0 && projectsFilteredByCategory.slice(0, 1).map((item, index) => {
                            const id = item.channel_id;
                            const catObj = categoryTabsList.find((item, index) => item.id === id);
                            return (
                                <p className="projects-intro__content" key={item.entry_id}>
                                    <span className="projects-intro__category-name">{UTILS.convertProjectCatIdToName(catObj.id)}</span>
                                    <span className="projects-intro__definition">{catObj.definition}</span>
                                </p>
                            );
                        })}
                    </div>
                </div>

                <div className="projects-block">
                    <div className="projects-block__container">
                        <ul className="projects-block__list">
                            {projectsFilteredByCategory.length > 0 && projectsFilteredByCategory.map((item, index) => (
                                <li className="projects-block__list-item" key={index}>
                                    <Link className="projects-block__content" to={`${CONSTANTS.ROUTES.projectsDetails.path}/${item.url_title}`}>
                                        <p className="projects-block__title">
                                            <span className="projects-block__title-text">
                                                {item.title}
                                            </span>
                                        </p>
                                        <div
                                            className="projects-block__visual"
                                            role="img"
                                            aria-label={item.title}
                                            style={{ backgroundImage: `url(${item.thumbnail})` }}>
                                            <img
                                                className="projects-block__img"
                                                src={item.thumbnail}
                                                height="300"
                                                width="300"
                                                alt={`Thumbnail of ${item.title}`}
                                            />
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="projects-block__buttons-container">
                            <Link className="app-cta app-cta--orange" to={CONSTANTS.ROUTES.about.path}>
                                Learn more about me <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProjectsOverview;
