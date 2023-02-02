import { useState, createContext, useEffect } from "react";

export const AppContext = createContext({
    currentApp: null,
    setCurrentApp: () => null,
});

export const AppProvider = ({ children }) => {
    const [currentApp, setCurrentApp] = useState(null);
    const value = { currentApp, setCurrentApp };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
