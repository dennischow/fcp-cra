import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [projectEntries, setProjectEntries] = useState([]);
    const [articleEntries, setArticleEntries] = useState([]);
    const [testimonialEntries, setTestimonialEntries] = useState([]);
    const value = {
        projectEntries,
        setProjectEntries,
        articleEntries,
        setArticleEntries,
        testimonialEntries,
        setTestimonialEntries,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
