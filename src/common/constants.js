export const BRAND_NAME = "Example Production";

export const ENDPOINT = {
    projects: process.env.REACT_APP_DEFAULT_ENDPOINT_WORKS,
    articles: process.env.REACT_APP_DEFAULT_ENDPOINT_ARTICLES,
    testimonials: process.env.REACT_APP_DEFAULT_ENDPOINT_TESTIMONIALS,
    conact: process.env.REACT_APP_DEFAULT_ENDPOINT_CONTACT,
};

export const ROUTES = {
    home: {
        title: "Home",
        name: "Home",
        path: "/",
    },
    about: {
        title: "About",
        name: "About",
        path: "/about",
    },
    projectsOverview: {
        title: "Project Overview",
        name: "Projects",
        path: "/projects/overview",
    },
    projectsDetails: {
        title: "Project Details",
        name: "Project Details",
        path: "/projects/details",
    },
    articlesOverview: {
        title: "Article Overview",
        name: "Articles",
        path: "/articles/overview",
    },
    articlesDetails: {
        title: "Article Details",
        name: "Articles",
        path: "/articles/details",
    },
    notFound: {
        title: "404 Page Not Found",
        name: "Not Found",
        path: "/page-not-found",
    },
};
