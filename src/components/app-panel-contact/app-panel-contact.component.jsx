import { Fragment, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import qs from "qs";
import { FaTelegramPlane, FaExclamationTriangle, FaTimes } from "react-icons/fa";

import * as CONSTANTS from "../../common/constants";
import { AppContext } from "../../contexts/appContext";
import AppInputField from "../form/app-input-field/app-input-field.component";
import AppTextareaField from "../form/app-textarea-field/app-textarea-field.component";
import AppSelectField from "../form/app-select-field/app-select-field.component";
import "./app-panel-contact.styles.scss";

const AppPanelContact = () => {

    const { setIsPanelContactShow } = useContext(AppContext);

    const contactFormObj = useFormik({
        initialValues: {
            contact_name: "",
            email_address: "",
            subject: "",
            message: "",
            referral_by: "",
        },
        validationSchema: Yup.object().shape({
            contact_name: Yup.string().required("This field is required."),
            email_address: Yup.string().email("Invalid email address").required("This field is required."),
            subject: Yup.string().required("This field is required."),
            message: Yup.string().required("This field is required."),
            referral_by: Yup.string().required("This field is required."),
        }),
        onSubmit: (values, formikBag) => {
            console.log(values);
            console.log(formikBag);
            console.log(JSON.stringify(values, null, 2));
            axios.post(CONSTANTS.ENDPOINT.conact, qs.stringify(values))
                .then((response) => {
                    console.log(response);
                    setTimeout(() => {
                        formikBag.resetForm();
                    }, 800);
                })
                .catch((error) => {
                    console.log(error);
                    console.error(error.message);
                    formikBag.setSubmitting(false);
                });
        },
    });

    const clearFormHandler = (formikBag) => {
        formikBag.resetForm();
        setIsPanelContactShow(false);
    };

    const subjectOptions = [
        {
            label: "-- Select a subject --",
            value: "",
        },
        {
            label: "General",
            value: "General",
        },
        {
            label: "Comment",
            value: "Comment",
        },
        {
            label: "Testimonial",
            value: "Testimonial",
        },
        {
            label: "Hang out",
            value: "Hang out",
        },
        {
            label: "Recommendation",
            value: "Recommendation",
        },
    ];

    const referralByOptions = [
        {
            label: "-- Select referral by --",
            value: "",
        },
        {
            label: "Search Engine",
            options: [
                {
                    label: "Google",
                    value: "Google",
                },
                {
                    label: "Yahoo",
                    value: "Yahoo",
                },
                {
                    label: "Bing",
                    value: "Bing",
                },
                {
                    label: "DuckDuckGo",
                    value: "DuckDuckGo",
                },
            ],
        },
        {
            label: "Social Networking",
            options: [
                {
                    label: "LinkedIn",
                    value: "LinkedIn",
                },
                {
                    label: "Facebook",
                    value: "Facebook",
                },
                {
                    label: "Twitter",
                    value: "Twitter",
                },
                {
                    label: "Instagram",
                    value: "Instagram",
                },
            ],
        },
        {
            label: "Others",
            options: [
                {
                    label: "Friend",
                    value: "Friend",
                },
                {
                    label: "Colleague",
                    value: "Colleague",
                },
                {
                    label: "Recruitment Agency",
                    value: "Recruitment Agency",
                },
                {
                    label: "Others",
                    value: "Others",
                },
            ],
        },
    ];

    return (
        <Fragment>
            <div className="app-panel-contact">
                <form className="app-panel-contact__form" noValidate autoComplete="off" onSubmit={contactFormObj.handleSubmit}>
                    <fieldset className="app-panel-contact__fieldset">
                        <legend className="app-panel-contact__legend">Get in touch</legend>

                        <AppInputField
                            label="Contact name"
                            type="text"
                            name="contact_name"
                            placeholder="Contact name"
                            form={contactFormObj}
                            autoFocus
                        />

                        <AppInputField
                            label="Email address"
                            type="email"
                            name="email_address"
                            placeholder="Email address"
                            form={contactFormObj}
                        />

                        <AppSelectField
                            label="Subject"
                            name="subject"
                            options={subjectOptions}
                            form={contactFormObj}
                        />

                        <AppTextareaField
                            label="Your message"
                            name="message"
                            placeholder="Your message"
                            rows={5}
                            maxLength={2000}
                            form={contactFormObj}
                        />

                        <AppSelectField
                            label="Referral by"
                            name="referral_by"
                            options={referralByOptions}
                            form={contactFormObj}
                        />

                        <div className="app-panel-contact__buttons-container">
                            <button className="app-panel-contact__button app-panel-contact__button--submit" type="submit" disabled={contactFormObj.isSubmitting}>
                                Send <FaTelegramPlane />
                            </button>
                            <button className="app-panel-contact__button app-panel-contact__button--reset" type="button" disabled={contactFormObj.isSubmitting} onClick={() => clearFormHandler(contactFormObj)}>
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
