export const BRAND_NAME = "Example Production";

export const ROUTES = {
    home: {
        name: "Home",
        path: "/",
    },
    about: {
        name: "About",
        path: "/about",
    },
    projects: {
        name: "Projects",
        path: "/projects",
    },
    articles: {
        name: "Articles",
        path: "/articles",
    },
    default: {
        name: "NoMatch",
        path: "*",
    },
};

export const ENNDPOINT = {
    projects: "http://www.fat-cow.net/index.php/factories/work-api",
    testimonials: "http://www.fat-cow.net/index.php/factories/testimonial-api",
    articles: "http://www.fat-cow.net/index.php/factories/blog-api",
};

export const STATISTICS = [
    {
        subject: "projects uploaded",
        number: 40,
    },
    {
        subject: "articles shared",
        number: 228,
    },
    {
        subject: "testimonials received",
        number: 16,
    },
    {
        subject: "passion",
        number: "infinite",
    },
];
