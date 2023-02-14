import "./app-feature-banner.styles.scss";

const AppFeatureBanner = ({ type, heroBackgroundUrl, heading, subHeading, ...otherProps }) => {
    // type: default, hero

    const bannerClass = `app-feature-banner app-feature-banner--${type === "hero" ? "hero" : "default"}`;

    return (
        <section className={bannerClass}>
            <div className="app-feature-banner__container">
                <div className="app-feature-banner__box">
                    {type === "hero" ? (
                        <div className="app-feature-banner__visual" style={{ backgroundImage: `url(${heroBackgroundUrl})` }}></div>
                    ) : null}
                    <div className="app-feature-banner__content">
                        <div className="app-feature-banner__tagline">
                            <h2 className="app-feature-banner__heading" dangerouslySetInnerHTML={{ __html: heading }}></h2>
                            <p className="app-feature-banner__sub-heading">{subHeading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppFeatureBanner;
