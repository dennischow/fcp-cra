import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const AppNavigateToTop = () => {
    const getLocation = useLocation();
    const getNavigationType = useNavigationType();

    useEffect(() => {
        if (getNavigationType !== "POP") {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
            console.log("AppNavigateToTop: Window scroll to top instantly:", getNavigationType);
        }
        return () => {}
    }, [getLocation]);
};

export default AppNavigateToTop;
