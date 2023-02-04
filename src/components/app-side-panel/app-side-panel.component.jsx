import { Fragment, useContext, useState, useRef } from "react";

import { AppContext } from "../../contexts/appContext";
import "./app-side-panel.styles.scss";

const AppSidePanel = () => {

    const { articleEntries } = useContext(AppContext);
    const [articlesFilteredByKeywordSearch, setArticlesByKeywordSearch] = useState(articleEntries);
    const searchValue = useRef("");

    const keywordSearch = (event) => {
        const keyword = event.target.value;
        searchValue.current = keyword;
        const result = articleEntries.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));
        setArticlesByKeywordSearch(result);
    };

    return (
        <Fragment>
            <div className="app-side-panel">
                <h1>Side Plan</h1>
                <input type="text" onChange={keywordSearch} playholder="search title"></input>
                <ul>
                    {searchValue.current.length > 0 && articlesFilteredByKeywordSearch.map((item, index) => (
                        <li key={item.entry_id}>{item.title}</li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default AppSidePanel;
