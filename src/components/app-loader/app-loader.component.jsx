import { ThreeDots } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as BrandLogo } from "./../../resources/images/common/brand-logo.svg";

import "react-loading-skeleton/dist/skeleton.css";
import "./app-loader.styles.scss";

const AppLoader = ({ hasLogo, hasIndicator, hasSkeleton }) => {
    return (
        <div className="app-loader">
            <div className="app-loader__container">
                <div className="app-loader__content">
                    {hasLogo && (
                        <div className="app-loader__brand-logo">
                            <BrandLogo />
                        </div>
                    )}

                    {hasIndicator && (
                        <div className="app-loader__indicator">
                            <ThreeDots
                                height="50"
                                width="50"
                                radius="10"
                                color="#000000"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName
                                visible={true}
                            />
                        </div>
                    )}

                    {hasSkeleton && (
                        <div className="app-loader__skeleton">
                            <Skeleton count={5} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppLoader;
