import { useContext, useEffect, useState} from "react";

import "./app-statistics.styles.scss";

import { appContext } from "../../../contexts/app-context";

const AppStatistics = () => {
    const { projectEntries, articleEntries, testimonialEntries } = useContext(appContext);
    const [projectsCount, setProjectsCount] = useState("");
    const [articlesCount, setArticlesCount] = useState("");
    const [testimonialsCount, setTestimonialsCount] = useState("");

    useEffect(() => {
        setProjectsCount(projectEntries.length || "-");
        setArticlesCount(articleEntries.length || "-");
        setTestimonialsCount(testimonialEntries.length || "-");
    }, [articleEntries, projectEntries, testimonialEntries]);

    return (
        <div className="app-statistics">
            <div className="app-statistics__container">
                <div className="app-statistics__col">
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{projectsCount}</span>
                            <span className="app-statistics__text">project uploaded</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{articlesCount}</span>
                            <span className="app-statistics__text">articles shared</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">{testimonialsCount}</span>
                            <span className="app-statistics__text">testimonials received</span>
                        </p>
                    </div>
                    <div className="app-statistics__box">
                        <p className="app-statistics__content">
                            <span className="app-statistics__num">Infinite</span>
                            <span className="app-statistics__text">passion</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStatistics;
