import { Fragment, useContext, useState, useRef } from "react";

import { AppContext } from "../../contexts/appContext";
import "./app-panel-articles-search.scss";

const AppPanelArticlesSearch = () => {
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
            <div className="app-panel-articles-search">
                <p>Side Plan</p>
                <form className="app-panel-articles-search__form">
                    <legend className="">search an article that you may interested to read</legend>
                    <fieldset className="app-panel-articles-search__fieldset">
                        <input className="app-panel-articles-search__input" type="text" onChange={keywordSearch} playholder="keywords"></input>
                    </fieldset>
                </form>
                <div className="app-panel-articles-search__result">
                    <ul className="app-panel-articles-search__result-list">
                        {searchValue.current.length > 0 && articlesFilteredByKeywordSearch.map((item, index) => (
                            <li className="app-panel-articles-search__result-list-item" key={item.entry_id}>
                                <a className="app-panel-articles-search__result-list-item-link" href="#">{item.title}</a>
                            </li>
                        ))}
                        {searchValue.current.length > 0 && articlesFilteredByKeywordSearch.length === 0 && (
                            <li className="app-panel-articles-search__result-list-item app-panel-articles-search__result-list-item--empty">
                                <span className="app-panel-articles-search__result-list-item-link">No match found</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}

export default AppPanelArticlesSearch;