import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [projectEntries, setProjectEntries] = useState([]);
    const [articleEntries, setArticleEntries] = useState([]);
    const value = {
        projectEntries,
        setProjectEntries,
        articleEntries,
        setArticleEntries,
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
