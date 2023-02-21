import { Fragment, useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";

import { AppContext } from "../../contexts/appContext";
import "./app-panel-articles-search.styles.scss";

const AppPanelArticlesSearch = () => {
    const { articleEntries, setIsPanelSearchShow } = useContext(AppContext);
    const [articlesFilteredByKeywordSearch, setArticlesByKeywordSearch] = useState(articleEntries);
    const [searchValue, setSearchValue] = useState("");

    const keywordSearch = (event) => {
        const keyword = event.target.value;
        setSearchValue(keyword);
        const result = articleEntries.filter((item) => item.title.toLowerCase().includes(keyword.toLowerCase()));
        setArticlesByKeywordSearch(result);
    };

    const keywordClear = () => {
        setSearchValue("");
        setIsPanelSearchShow(false);
    };

    return (
        <Fragment>
            <div className="app-panel-articles-search">
                <form className="app-panel-articles-search__form">
                    <fieldset className="app-panel-articles-search__fieldset">
                        <legend className="app-panel-articles-search__legend">search an article that you may interested to read</legend>
                        <input className="app-panel-articles-search__input" type="text" placeholder="keywords..." autoFocus onChange={keywordSearch} value={searchValue} />
                            <button className="app-panel-articles-search__button" type="button" onClick={keywordClear}>
                            <FaTimes />
                        </button>
                    </fieldset>
                </form>
                {searchValue.length > 0 && (
                    <div className="app-panel-articles-search__result">
                        <ul className="app-panel-articles-search__result-list">
                            {articlesFilteredByKeywordSearch.map((item, index) => (
                                <li className="app-panel-articles-search__result-list-item" key={item.entry_id}>
                                    <a className="app-panel-articles-search__result-list-item-link" href="#">{item.title}</a>
                                </li>
                            ))}
                            {articlesFilteredByKeywordSearch.length <= 0 && (
                                <li className="app-panel-articles-search__result-list-item app-panel-articles-search__result-list-item--empty">
                                    <span className="app-panel-articles-search__result-list-item-link">No match found</span>
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </Fragment>
    );
}

export default AppPanelArticlesSearch;