import "./app-nav.styles.scss";

const AppNav = ({ props, ...otherProps }) => {
    return (
        <nav className="app-nav">
            <ul className="app-nav__list">
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">Home</a>
                </li>
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">About</a>
                </li>
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">Works</a>
                </li>
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">Articles</a>
                </li>
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">Contact</a>
                </li>
                <li className="app-nav__item">
                    <a className="app-nav__link" href="#">Search</a>
                </li>
            </ul>
        </nav>
    );
};

export default AppNav;
