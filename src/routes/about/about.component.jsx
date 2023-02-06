import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import AppHeroBanner from "../../components/app-hero-banner/app-hero-banner.component";
import TestimonialWidget from "../../components/testimonial-widget/testimonial-widget.componnet";
import AppStatistics from "../../components/app-statistics/app-statistics.component";
import heroBackgroundImg from "../../resources/images/about/double-colors-exposure.jpg";

import "./about.styles.scss";

const About = () => {
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
                        <div className="intro-group__visual">[image]</div>
                        <div className="intro-group__content">
                            <p className="intro-group__name">My name is Dennis Chow a.k.a. Fat-Cow</p>
                            <p className="intro-group__statment">I AM A WEB DEVELOPER WITH DESIGN BACKGROUND & NOW FOCUS ON FRONT END WEB DEVELOPMENT</p>
                            <p className="intro-group__quote">By taking things one step at a time, you will find yourself actually mastering each specific skill and accomplishing your goals!</p>
                            <p className="intro-group__brief">
                                I enjoy problem-solving and turning them into simple and clean interface designs. I also like the client-side logic, microinteractions, content presentation, structure of coding, user experience, responsive layout, and always strive to write elegant and efficient code with best practices, whether it be HTML5, CSS3/LESS, or JavaScript (Vanilla/jQuery/AngularJS).
                                <br />
                                When I am not glued to my monitor, you will find me most likely banging with dumbbells at the gym, blasting music on my headphones, tasting a sexy food, and or posting pictures on Instagram.
                            </p>
                            <p className="intro-group__buttons-container">
                                <button class="app-cta app-cta--orange" type="button">A litte bit more</button>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="profile">
                    <div className="profile__container app-container">
                        <p className="profile__header">CODER ✖ DESIGNER</p>
                        <p className="profile__text">I create content first, clean, functional, logical, search engine spiders friendly, professional websites that validated with W3C standards, resulting in semantic structure and accessible HTML and CSS. 100% of my websites are dedicatedly hand coded. Because I enjoy the romance of "Start From Scratch".</p>
                        <p className="profile__text">For building websites or web-based applications, my gear consists of Photoshop, Illustrator, Visual Studio Code, Sublime Text, HTML, CSS, JavaScript, Gulp, NPM, PHP, and MySQL.  My current CMS of choice is ExpressionEngine (Because I can build instead of manipulating and I love clean code).  Also, loud music , speakers, sub-woofer, and headphones are part of my gear.</p>
                        <p className="profile__text">Specialties: Build from scratch, Web code-based prototyping, UI/UX enhancement & troubleshoot, Front-end web development, Semantic and clean HTML structure, CSS styling/hacking, DOM manipulation & data exchange with JavaScript (OOJS/AJAX/JSON), Interactive user interface, Responsive design, Web performance testing, Essential knowledge of SEO and WAI for the web, Eyes for details/design, Web development (desktop and mobile), and Design.</p>
                        <p className="profile__text">In the past two years, I have been on and off self-experimenting with AngularJS, Vue, Meteor, C3, Chart, Moment, BEM, jsRender, Handlebar, Jade/Pug, Nunjucks, and Craft, trying to have them under my belt.</p>
                        <div className="profile__chart">[Chart]</div>
                        <p className="profile__text">Anymore info? ↑ ↑ ↓ ↓ ← → ← → B A to unlock the secret if you interested to know more.</p>
                        <p className="profile__text">Front-End Web Developer responsible for a website’s user-facing code and the architecture of its immersive user experiences. As an advanced FEWD, I also made visual design decisions on-the-fly for problem-solving, because some problems of which cannot be solved by writing code alone.</p>
                    </div>
                </section>

                <TestimonialWidget isContentExpandedByDefault={true} enteriesLimitByDefault={6} />

                <AppStatistics />
            </div>
        </Fragment>
    );
};

export default About;
