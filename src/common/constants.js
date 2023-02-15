export const BRAND_NAME = "Example Production";

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
    articleDetails: {
        title: "Article Details",
        name: "Articles",
        path: "/articles/details",
    },
    default: {
        title: "Page Not Found",
        name: "NoMatch",
        path: "*",
    },
};

export const ENNDPOINT = {
    projects: "http://www.fat-cow.net/index.php/factories/work-api",
    articles: "http://www.fat-cow.net/index.php/factories/blog-api",
    testimonials: "http://www.fat-cow.net/index.php/factories/testimonial-api",
};
