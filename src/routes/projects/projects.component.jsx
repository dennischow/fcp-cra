import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaArrowRight } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import AppFeatureBanner from "../../components/app-feature-banner/app-feature-banner.component";
import AppStatistics from "../../components/app-statistics/app-statistics.component";

import "./projects.styles.scss";

const Projects = () => {
    const { projectEntries } = useContext(AppContext);
    const [projectsFilteredByCategory, setProjectsFilteredByCategory] = useState(projectEntries);
    const categoryIdRef = useRef(4);
    const categoryListElementRef = useRef();
    const categoryTabsList = [
        {
            id: 4,
            text: "Web Projects",
            categoryName: "Web Development / Design",
            definition: "thinking + coding",
            isActive: true,
        },
        {
            id: 5,
            text: "Print Projects",
            categoryName: "Print Design",
            definition: "layout + cmyk",
            isActive: false,
        },
        {
            id: 6,
            text: "Tee Projects",
            categoryName: "Tee Design",
            definition: "creativity + production",
            isActive: false,
        },
    ];

    useEffect(() => {
        categoryToShow(categoryIdRef.current);
        return () => {};
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
        categoryIdRef.current = catId;
        categoryToShow(catId);
        console.log(event.target);
        categoryListElementRef.current.childNodes.forEach((ele) => {
            ele.classList.remove("projects-category__list-item--active");
        });
        event.target.parentNode.classList.add("projects-category__list-item--active");
    };

    return (
        <Fragment>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div className="page-projects">
                <AppFeatureBanner
                    type="default"
                    heroBackgroundUrl={""}
                    heading="Nowadays I focus on front-end web development"
                    subHeading="Let my work samples speak on my behalf"
                />

                <div className="projects-category">
                    <div className="projects-category__container">
                        <ul className="projects-category__list" ref={categoryListElementRef} role="tablist">
                            {categoryTabsList.map((item, index) => (
                                <li className={getCategoryListElementClassName(item.isActive)} key={item.id} role="tab">
                                    <a
                                        className="projects-category__btn"
                                        onClick={(event) => categorySelectHandler(event, item.id)}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="projects-intro">
                    <div className="projects-intro__container">
                        {projectsFilteredByCategory.length > 0 &&
                            projectsFilteredByCategory.slice(0, 1).map((item, index) => {
                                const id = item.channel_id;
                                const catObj = categoryTabsList.find((item, index) => item.id === id);
                                return (
                                    <p className="projects-intro__content" key={item.entry_id}>
                                        <span className="projects-intro__category-name">{catObj.categoryName}</span>
                                        <span className="projects-intro__definition">{catObj.definition}</span>
                                    </p>
                                );
                            })}
                    </div>
                </div>

                <div className="projects-block">
                    <div className="projects-block__container">
                        <ul className="projects-block__list">
                            {projectsFilteredByCategory.length > 0 &&
                                projectsFilteredByCategory.map((item, index) => (
                                    <li className="projects-block__list-item" key={index}>
                                        <div className="projects-block__content">
                                            <p className="projects-block__title">
                                                <Link className="projects-block__title-link" to={`${CONSTANTS.ROUTES.projectDetails.path}/${item.url_title}`}>
                                                    {item.title}
                                                </Link>
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
                                        </div>
                                    </li>
                                ))}
                        </ul>

                        <div className="projects-block__buttons-container">
                            <Link className="app-cta app-cta--gray" to={CONSTANTS.ROUTES.about.path}>
                                Learn more about me <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default Projects;
