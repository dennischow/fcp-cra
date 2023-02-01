import * as constants from "../../app.constant";

import "./app-statistics.styles.scss";

const AppStatistics = () => {
    return (
        <div className="app-statistics">
            <div className="app-statistics__container">
                <div className="app-statistics__col">
                    {constants.STATISTICS.map((item) => (
                        <div className="app-statistics__box">
                            <p className="app-statistics__content">
                                <span className="app-statistics__num">{item.number}</span>
                                <span className="app-statistics__text">{item.subject}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppStatistics;
