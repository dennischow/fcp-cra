import "./app-hero-banner.styles.scss";

const AppHeroBanner = ({ heroBackgroundUrl, heading, subHeading, ...otherProps }) => {

    return (
        <section className="app-hero-banner">
            <div className="app-hero-banner__container">
                <div className="app-hero-banner__box">
                    <div className="app-hero-banner__visual" style={{backgroundImage: `url(${heroBackgroundUrl})`}}></div>
                    <div className="app-hero-banner__content">
                        <div className="app-hero-banner__tagline">
                            <h2 className="app-hero-banner__heading"
                                dangerouslySetInnerHTML={{ __html: heading }}></h2>
                            <p className="app-hero-banner__sub-heading">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppHeroBanner;
