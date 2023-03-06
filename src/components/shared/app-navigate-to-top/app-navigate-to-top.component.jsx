import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const AppNavigateToTop = () => {
    const location = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (navigationType !== "POP") {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            console.log("AppNavigateToTop: Window scroll to top instantly:", navigationType);
        }
    }, [location]);
};

export default AppNavigateToTop;
