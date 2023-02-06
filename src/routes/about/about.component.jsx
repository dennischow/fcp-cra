import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line, Bar } from 'react-chartjs-2';

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import TestimonialWidget from "../../components/testimonial-widget/testimonial-widget.componnet";
import AppStatistics from "../../components/app-statistics/app-statistics.component";
import heroBackgroundImg from "../../resources/images/about/double-colors-exposure.jpg";

import "./about.styles.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const About = () => {

    const aWeekOfMyWeek = {
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {},
                },
                title: {
                    display: true,
                    // text: "Time Spent",
                    text: "A Week Of My Life",
                    font: {
                        size: 18,
                    },
                },
            },
            scales: {
                y: {
                    grid: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: "# of Hours",
                    },
                    ticks: {
                        beginAtZero: true,
                        font: {
                            size: 12,
                        },
                        labelOffset: -5,
                        // Create scientific notation labels
                        // callback: function(value, index, values) {
                        //     return value + " hours";
                        // }
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    title: {
                        display: false,
                        text: "",
                    },
                    ticks: {
                        beginAtZero: true,
                        font: {
                            size: 12,
                        },
                        labelOffset: 0,
                        // Create scientific notation labels
                        // callback: function(value, index, values) {
                        //     return value + " hours";
                        // }
                    },
                },
            },
        },
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [
                {
                    label: "Music on Headphone",
                    data: [6, 10, 12.2, 12.5, 13, 12, 7],
                    borderWidth: 1,
                    fill: false,
                    borderColor: "#666666",
                },
                {
                    label: "Work-Out",
                    data: [3, 1.5, 1, 0, 0, 1, 3],
                    borderWidth: 1,
                    fill: false,
                    borderColor: "#8BC43F",
                },
                {
                    label: "Front-End Development",
                    data: [4, 8, 8, 8, 8, 7, 5],
                    borderWidth: 1,
                    fill: false,
                    borderColor: "#F7931D",
                },
                {
                    label: "Experiment",
                    data: [4, 2, 2, 1.5, 1, 2, 5],
                    borderWidth: 1,
                    fill: false,
                    borderColor: "#27AAE1",
                },
            ],
        },
    };

    const ratioOfPassions = {
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                    position: "bottom",
                    labels: {},
                },
                title: {
                    display: true,
                    text: "",
                    font: {
                        size: 18,
                    },
                },
            },
            scales: {
                y: {
                    grid: {
                        display: true,
                        color: "#eeeeee",
                    },
                    title: {
                        display: false,
                        text: "",
                    },
                    ticks: {
                        beginAtZero: true,
                        font: {
                            size: 12,
                        },
                        // labelOffset: -5,
                        // Create scientific notation labels
                        // callback: function(value, index, values) {
                        //     return value + " hours";
                        // }
                    },
                },
                x: {
                    grid: {
                        display: false,
                        color: "#eeeeee",
                    },
                    title: {
                        display: false,
                        text: "",
                    },
                    ticks: {
                        beginAtZero: true,
                        font: {
                            size: 12,
                        },
                        labelOffset: 0,
                        // Create scientific notation labels
                        // callback: function(value, index, values) {
                        //     return value + " hours";
                        // }
                    },
                },
            },
        },
        data: {
            labels: ["Loud Music", "Javascript Logic", "HTML & CSS", "Designing", "ExpressionEngine", "PHP & MySQL"],
            datasets: [
                {
                    // label: "Music on Headphone",
                    data: [98, 93, 92, 80, 72, 23],
                    borderWidth: 0,
                    fill: false,
                    borderColor: "#666666",
                    backgroundColor: ["#cccccc", "#999999", "#cccccc", "#999999", "#cccccc", "#999999"],
                },
            ],
        },
    };

    return (
        <Fragment>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="page-about">

                <AppHeroBanner
                    heroBackgroundUrl={heroBackgroundImg}
                    heading="<span>It'S time to</span> <span>introduce</span> <span>myself</span>"
                    subHeading="Let's get it started"
                />

                <section className="intro-group">
                    <div className="intro-group__container app-container">
                        <div className="intro-group__visual"></div>
                        <div className="intro-group__content">
                            <p className="intro-group__name">My name is Dennis Chow a.k.a. Fat-Cow</p>
                            <p className="intro-group__statment">I am a web developer with design background & now focus on front end web development</p>
                            <p className="intro-group__quote">By taking things one step at a time, you will find yourself actually mastering each specific skill and accomplishing your goals!</p>
                            <p className="intro-group__brief">
                                I enjoy problem-solving and turning them into simple and clean interface designs. I also like the client-side logic, microinteractions, content presentation, structure of coding, user experience, responsive layout, and always strive to write elegant and efficient code with best practices, whether it be HTML5, CSS3/LESS, or JavaScript (Vanilla/jQuery/AngularJS).
                                <br />
                                When I am not glued to my monitor, you will find me most likely banging with dumbbells at the gym, blasting music on my headphones, tasting a sexy food, and or posting pictures on Instagram.
                            </p>
                            <p className="intro-group__buttons-container">
                                <button className="app-cta app-cta--orange" type="button">A litte bit more</button>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="profile-group">
                    <div className="profile-group__container app-container">
                        <p className="profile-group__header">CODER <span>✖</span> DESIGNER</p>
                        <p className="profile-group__text">I create content first, clean, functional, logical, search engine spiders friendly, professional websites that validated with W3C standards, resulting in semantic structure and accessible HTML and CSS. 100% of my websites are dedicatedly hand coded. Because I enjoy the romance of "Start From Scratch".</p>
                        <p className="profile-group__text">For building websites or web-based applications, my gear consists of Photoshop, Illustrator, Visual Studio Code, Sublime Text, HTML, CSS, JavaScript, Gulp, NPM, PHP, and MySQL.  My current CMS of choice is ExpressionEngine (Because I can build instead of manipulating and I love clean code).  Also, loud music , speakers, sub-woofer, and headphones are part of my gear.</p>
                        <p className="profile-group__text">Specialties: Build from scratch, Web code-based prototyping, UI/UX enhancement & troubleshoot, Front-end web development, Semantic and clean HTML structure, CSS styling/hacking, DOM manipulation & data exchange with JavaScript (OOJS/AJAX/JSON), Interactive user interface, Responsive design, Web performance testing, Essential knowledge of SEO and WAI for the web, Eyes for details/design, Web development (desktop and mobile), and Design.</p>
                        <p className="profile-group__text">In the past two years, I have been on and off self-experimenting with AngularJS, Vue, Meteor, C3, Chart, Moment, BEM, jsRender, Handlebar, Jade/Pug, Nunjucks, and Craft, trying to have them under my belt.</p>

                        <div className="profile-group__line-chart">
                            <Line options={aWeekOfMyWeek.options} data={aWeekOfMyWeek.data} />
                        </div>

                        <p className="profile-group__text">Anymore info? ↑ ↑ ↓ ↓ ← → ← → B A to unlock the secret if you interested to know more.</p>
                        <p className="profile-group__text">Front-End Web Developer responsible for a website’s user-facing code and the architecture of its immersive user experiences. As an advanced FEWD, I also made visual design decisions on-the-fly for problem-solving, because some problems of which cannot be solved by writing code alone.</p>
                    </div>
                </section>

                <section className="passions-group">
                    <div className="passions-group__container app-container">
                        <p className="passions-group__header">Ratio of Passions</p>
                        <p className="passions-group__text">something I enjoy of doing</p>
                        <div className="passions-group__bar-chart">
                            <Bar options={ratioOfPassions.options} data={ratioOfPassions.data} />
                        </div>
                    </div>
                </section>

                <TestimonialWidget isContentExpandedByDefault={true} enteriesLimitByDefault={6} />

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default About;
