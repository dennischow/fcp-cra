import { useContext } from "react";

import { AppContext } from "../../contexts/appContext";
import "./testimonial-widget.styles.scss";

const TestimonialWidget = () => {

    const { testimonialEntries } = useContext(AppContext);

    console.log(testimonialEntries)

    return (
        <div className="testimonial-widget">
            <div className="testimonial-widget__container">
                <div className="testimonial-widget__bg-text" data-bg-text="testimonial"></div>
                <div className="testimonial-widget__header-group">
                    <h2 className="testimonial-widget__header-group-headline">What do people say about me?</h2>
                    <h3 className="testimonial-widget__header-group-sub-headline">
                        <span>“Testimonials</span> from whom I have collaborated with”
                    </h3>
                    <p className="testimonial-widget__header-group-buttons-container">
                        <button type="button">
                            <span className="s-dot"></span>
                            <span className="s-left">Hide</span>
                            <span className="s-right">Show</span>
                        </button>
                    </p>
                </div>
                <div className="testimonial-widget__content-group">
                    <div className="testimonial-widget__content-group-list">
                        {testimonialEntries.length > 0 && testimonialEntries.map((item, index) => (
                            <div className="testimonial-widget__content-group-list-item" data-id={item.entry_id} key={item.entry_id}>
                                <blockquote className="testimonial-widget__content-group-item">
                                    <div className="testimonial-widget__content-group-content">
                                        <p className="testimonial-widget__content-group-text">
                                            {item.testimonial_content}
                                        </p>
                                        <footer className="testimonial-widget__content-group-sender-info">
                                            <span className="testimonial-widget__content-group-visual">
                                                <img className="testimonial-widget__content-group-img"
                                                    width="80"
                                                    height="80"
                                                    src={item.profile_picture}
                                                    alt={`picture of ${item.person_name}`}
                                                />
                                            </span>
                                            <p className="testimonial-widget__content-group-person">
                                                {item.person_name}
                                            </p>
                                            <p className="testimonial-widget__content-group-company">
                                                {item.company_name_website}
                                            </p>
                                        </footer>
                                    </div>
                                </blockquote>
                            </div>
                        ))}
                    </div>
                    <p className="testimonial-widget__buttons-container">
                        <button type="button">
                            Show all<span className="bubble">+11</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialWidget;
