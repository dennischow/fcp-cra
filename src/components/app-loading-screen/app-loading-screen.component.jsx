import { ThreeDots } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import { ReactComponent as BrandLogo } from "./../../resources/images/common/brand-logo.svg";

import "react-loading-skeleton/dist/skeleton.css";
import "./app-loading-screen.styles.scss";

const AppLoadingSCreen = ({ hasLogo, hasIndicator, hasSkeleton }) => {
    return (
        <div className="app-loading-screen">
            <div className="app-loading-screen__container">
                <div className="app-loading-screen__content">
                    {hasLogo && (
                        <div className="app-loading-screen__brand-logo">
                            <BrandLogo />
                        </div>
                    )}

                    {hasIndicator && (
                        <div className="app-loading-screen__indicator">
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
                        <div className="app-loading-screen__skeleton">
                            <Skeleton count={5} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppLoadingSCreen;
