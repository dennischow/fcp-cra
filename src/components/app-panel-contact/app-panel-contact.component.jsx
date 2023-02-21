import { Fragment, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaTelegramPlane, FaExclamationTriangle, FaTimes } from "react-icons/fa";

import { AppContext } from "../../contexts/appContext";
import "./app-panel-contact.styles.scss";

const AppPanelContact = () => {

    const { setIsPanelContactShow } = useContext(AppContext);

    const contactFormObj = useFormik({
        initialValues: {
            contact_name: "",
            contact_email: "",
            subject: "",
            message: "",
            referral_by: "",
        },
        validationSchema: Yup.object().shape({
            contact_name: Yup.string().required("This field is required."),
            contact_email: Yup.string().email("Invalid email address").required("This field is required."),
            subject: Yup.string().required("This field is required."),
            message: Yup.string().required("This field is required."),
            referral_by: Yup.string().required("This field is required."),
        }),
        onSubmit: (values, formikBag) => {
            console.log(values);
            console.log(formikBag);
            setTimeout(() => {
                formikBag.resetForm();
                setIsPanelContactShow(false);
            }, 800);
        },
    });

    const clearFormHandler = (formikBag) => {
        formikBag.resetForm();
        setIsPanelContactShow(false);
    };

    return (
        <Fragment>
            <div className="app-panel-contact">
                <form className="app-panel-contact__form" noValidate autoComplete="off" onSubmit={contactFormObj.handleSubmit}>
                    <fieldset className="app-panel-contact__fieldset">
                        <legend className="app-panel-contact__legend">Get in touch</legend>

                        <div className="app-panel-contact__form-group">
                            <label className="app-panel-contact__label form-label" htmlFor="contact_name">
                                Contact name
                            </label>
                            <input
                                className="app-panel-contact__input form-control"
                                type="text"
                                placeholder="Contact name"
                                name="contact_name"
                                value={contactFormObj.values.contact_name}
                                onChange={contactFormObj.handleChange}
                                autoFocus
                            />
                            {contactFormObj.touched.contact_name && contactFormObj.errors.contact_name ? (
                                <div className="app-panel-contact__error-message invalid-feedback">{contactFormObj.errors.contact_name}</div>
                            ) : null}
                        </div>

                        <div className="app-panel-contact__form-group">
                            <label className="app-panel-contact__label form-label" htmlFor="contact_email">
                                Email address
                            </label>
                            <input
                                className="app-panel-contact__input form-control"
                                type="email"
                                placeholder="Email address"
                                name="contact_email"
                                value={contactFormObj.values.contact_email}
                                onChange={contactFormObj.handleChange}
                            />
                            {contactFormObj.touched.contact_email && contactFormObj.errors.contact_email ? (
                                <div className="app-panel-contact__error-message invalid-feedback">{contactFormObj.errors.contact_email}</div>
                            ) : null}
                        </div>

                        <div className="app-panel-contact__form-group">
                            <label className="app-panel-contact__label form-label" htmlFor="subject">
                                Subject
                            </label>
                            <select
                                className="app-panel-contact__input form-select"
                                name="subject"
                                value={contactFormObj.values.subject}
                                onChange={contactFormObj.handleChange}>
                                <option value="">-- Select a subject --</option>
                                <option label="General" value="General">
                                    General
                                </option>
                                <option label="Project" value="Project">
                                    Project
                                </option>
                                <option label="Comment" value="Comment">
                                    Comment
                                </option>
                                <option label="Testimonial" value="Testimonial">
                                    Testimonial
                                </option>
                                <option label="Hang out" value="Hang out">
                                    Hang out
                                </option>
                                <option label="Recommendation" value="Recommendation">
                                    Recommendation
                                </option>
                            </select>
                            {contactFormObj.touched.subject && contactFormObj.errors.subject ? (
                                <div className="app-panel-contact__error-message invalid-feedback">{contactFormObj.errors.subject}</div>
                            ) : null}
                        </div>

                        <div className="app-panel-contact__form-group">
                            <label className="app-panel-contact__label form-label" htmlFor="message">
                                Your message
                            </label>
                            <textarea
                                className="app-panel-contact__input form-control"
                                placeholder="Your message"
                                name="message"
                                rows={5}
                                maxLength={2000}
                                value={contactFormObj.values.message}
                                onChange={contactFormObj.handleChange}
                            />
                            {contactFormObj.touched.message && contactFormObj.errors.message ? (
                                <div className="app-panel-contact__error-message invalid-feedback">{contactFormObj.errors.message}</div>
                            ) : null}
                        </div>

                        <div className="app-panel-contact__form-group">
                            <label className="app-panel-contact__label form-label" htmlFor="referral_by">
                                Referral by
                            </label>
                            <select
                                className="app-panel-contact__input form-select"
                                name="referral_by"
                                value={contactFormObj.values.referral_by}
                                onChange={contactFormObj.handleChange}>
                                <option value="">-- Select referral by --</option>
                                <optgroup label="Search Engine">
                                    <option label="Google" value="Google">
                                        Google
                                    </option>
                                    <option label="Yahoo" value="Yahoo">
                                        Yahoo
                                    </option>
                                    <option label="Bing" value="Bing">
                                        Bing
                                    </option>
                                    <option label="DuckDuckGo" value="DuckDuckGo">
                                        DuckDuckGo
                                    </option>
                                </optgroup>
                                <optgroup label="Social Networking">
                                    <option label="LinkedIn" value="LinkedIn">
                                        LinkedIn
                                    </option>
                                    <option label="Facebook" value="Facebook">
                                        Facebook
                                    </option>
                                    <option label="Twitter" value="Twitter">
                                        Twitter
                                    </option>
                                    <option label="Instagram" value="Instagram">
                                        Instagram
                                    </option>
                                </optgroup>
                                <optgroup label="Others">
                                    <option label="Friend" value="Friend">
                                        Friend
                                    </option>
                                    <option label="Colleague" value="Colleague">
                                        Colleague
                                    </option>
                                    <option label="Recruitment Agency" value="Recruitment Agency">
                                        Recruitment Agency
                                    </option>
                                    <option label="Others" value="Others">
                                        Others
                                    </option>
                                </optgroup>
                            </select>
                            {contactFormObj.touched.referral_by && contactFormObj.errors.referral_by ? (
                                <div className="app-panel-contact__error-message invalid-feedback">{contactFormObj.errors.referral_by}</div>
                            ) : null}
                        </div>

                        <div className="app-panel-contact__buttons-container">
                        <button className="app-panel-contact__button app-panel-contact__button--submit" type="submit" disabled={contactFormObj.isSubmitting}>
                                Send <FaTelegramPlane />
                            </button>
                            <button className="app-panel-contact__button app-panel-contact__button--reset" type="button" onClick={() => clearFormHandler(contactFormObj)}>
                                Close <FaTimes />
                            </button>
                        </div>

                        <p className="app-panel-contact__note">
                            <FaExclamationTriangle /> Note: All fields are required. Please make sure you have inserted a correct email address,
                            otherwise, I cannot reach you.
                        </p>
                    </fieldset>
                </form>
            </div>
        </Fragment>
    );
};

export default AppPanelContact;
