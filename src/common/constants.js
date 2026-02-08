export const AWAY_PAGE_TITLE = "Come Back";
export const BRAND_NAME = import.meta.env.VITE_DEFAULT_BRAND_NAME || 'Default Brand';
export const AUTHOR = import.meta.env.VITE_DEFAULT_AUTHOR || 'Default Author';
export const VIDEO_IDS = [
    "xQoC9JlNXM8",
    "9XBIcYE1T98",
    "Z5NoQg8LdDk",
    "zSmvW2sZ3ZU",
    "YUTK6AcjHQQ",
    "BaOScwq_lZs",
    "om-OQ2VaN-w",
    "ByucbuSe958",
    "tQ0yjYUFKAE",
    "I7R-PSvvziU",
    "zqOWV_pq9Zs",
    "WZf9IkF7YHg",
    "z5rRZdiu1UE",
    "eVTXPUF4Oz4",
    "JTMVOzPPtiw",
    "2cXDgFwE13g",
];

export const SOCIAL_URL = {
    linkedIn: import.meta.env.VITE_DEFAULT_SOCIAL_URL_LINKEDIN || '#',
    github: import.meta.env.VITE_DEFAULT_SOCIAL_URL_GITHUB || '#',
};

export const ENDPOINT = {
    projects: import.meta.env.VITE_DEFAULT_ENDPOINT_WORKS || 'https://api.example.com/works',
    articles: import.meta.env.VITE_DEFAULT_ENDPOINT_ARTICLES || 'https://api.example.com/articles',
    testimonials: import.meta.env.VITE_DEFAULT_ENDPOINT_TESTIMONIALS || 'https://api.example.com/testimonials',
    contact: import.meta.env.VITE_DEFAULT_ENDPOINT_CONTACT || 'https://api.example.com/contact',
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
