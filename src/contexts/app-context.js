import { useState, createContext } from "react";

export const appContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [projectEntries, setProjectEntries] = useState([]);
    const [articleEntries, setArticleEntries] = useState([]);
    const [testimonialEntries, setTestimonialEntries] = useState([]);
    const [isPanelContactShow, setIsPanelContactShow] = useState(false);
    const [isPanelSearchShow, setIsPanelSearchShow] = useState(false);
    const value = {
        projectEntries,
        setProjectEntries,
        articleEntries,
        setArticleEntries,
        testimonialEntries,
        setTestimonialEntries,
        isPanelContactShow,
        setIsPanelContactShow,
        isPanelSearchShow,
        setIsPanelSearchShow,
    };
    return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
