import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import AppStatistics from "../../components/app-statistics/app-statistics.component";

import "./projects.styles.scss";

const Projects = () => {
    const { projectEntries } = useContext(AppContext);
    const [projectsFilteredByCategory, setProjectsFilteredByCategory] = useState(projectEntries);
    const categoryIdRef = useRef(4);

    const categoryTabsList = [
        {
            id: 4,
            text: "Web Projects",
            categoryName: "Web Development / Design",
            definition: "thinking + coding",

        },
        {
            id: 5,
            text: "Print Projects",
            categoryName: "Print Design",
            definition: "layout + cmyk",
        },
        {
            id: 6,
            text: "Tee Projects",
            categoryName: "Tee Design",
            definition: "creativity + production",
        },
    ];

    useEffect(() => {
        categoryToShow(categoryIdRef.current);
        return () => {};
    }, [projectEntries]);

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
    };

    return (
        <Fragment>
            <Helmet>
                <title>Projects</title>
            </Helmet>
            <div className="page-projects">
                <AppHeroBanner
                    heroBackgroundUrl={""}
                    heading="Nowadays I focus on front-end web development"
                    subHeading="Let my work samples speak on my behalf"
                />

                <div className="profile-container app-container">


                    <div className="projects-category">
                        <ul className="projects-category__list" role="tablist">
                            {categoryTabsList.map((item, index) => (
                                <li className="projects-category__list-item" role="tab" key={item.id}>
                                    <a className="projects-category__btn-cat-change" onClick={(event) => categorySelectHandler(event, item.id)}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="projects-intro">
                        {projectsFilteredByCategory.length > 0 && projectsFilteredByCategory.slice(0, 1).map((item, index) => {
                            const id = item.channel_id;
                            const catObj = categoryTabsList.find((item, index) => item.id === id);
                            return (
                                <p className="projects-intro__content" key={item.entry_id}>
                                    <span className="projects-intro__category-name">{catObj.categoryName}</span>
                                    <span className="projects-intro__definition">{catObj.definition}</span>
                                </p>
                            )
                        })}
                    </div>

                    <div className="projects-block">
                        <ul className="projects-block__list">
                            {projectsFilteredByCategory.length > 0 && projectsFilteredByCategory.map((item, index) => (
                                <li className="projects-block__list-item" key={index}>
                                    <div className="projects-block__content">
                                        <p className="projects-block__title">
                                            <a className="projects-block__title-link" href="#" target="_top">{item.title}</a>
                                        </p>
                                        <div className="projects-block__visual visual" role="img" aria-label={item.title} style={{backgroundImage: `url(${item.thumbnail})`}}>
                                            <img className="projects-block__img" src={item.thumbnail} height="300" width="300" alt={`Thumbnail of ${item.title}`} />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default Projects;
