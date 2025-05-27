"use client";
import { useFormik } from "formik";
import { useState, useEffect } from 'react';
import ButtonLoader from "../components/ButtonLoader";
import { SidebarContactFormValidation } from "../components/form_validation/Validation";
import ReCAPTCHA from 'react-google-recaptcha';


export default function SidebarContactForm(){
    
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
        pathName: "Sidebar Let's Connect Form"
    }
    
    const [isLoading, setIsLoading] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const [isSidebarActive, setIsSidebarActive] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleToggleClick = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    const onReCAPTCHAChange = (value) => {
        if (value) {
            setIsVerified(true);
        } else {
            setIsVerified(false);
        }
    }

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: SidebarContactFormValidation,
    onSubmit: async function(values, { resetForm }){
        if (!isVerified) {
            alert('Please complete the captcha verification to proceed.');
            return;
        }
        setIsLoading(true);
        setIsSubmitted(false)
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/sidebar/mail/v1/send`, {
        headers: {"Content-Type":'application/json'},
        method: 'POST',
        body: JSON.stringify(values)
        });
        const result = await response.json();
        setIsLoading(false);
        resetForm();
        setIsSubmitted(true);
        setTimeout(() => { setIsSubmitted(false) }, 3000);
    }
    })

    return (
        <>
            <div className={`sidebar-contact ${isSidebarActive ? "active" : ""}`}>
                <div
                    className={`toggle ${isSidebarActive ? "active" : ""}`}
                    style={{ display: isVisible ? "block" : "none" }}
                    onClick={handleToggleClick}
                    title="Let's Connect"
                    data-placement="left"
                    data-original-title="Let's Connect"
                >
                <span className="mobile-hide"><i className="fi fi-rr-envelope" style={{'verticalAlign': 'middle'}}></i> {`Let's`} Connect</span>
                </div>
                <h2>Leave a Message</h2>
                <div className="scroll">
                    <form className="contact__form" method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                                Your message was sent successfully.
                                </div>
                            </div>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.name && touched.name ? (
                                    <p className="focus-border text-danger">
                                    {errors.name}
                                    </p>
                                ) : null
                            }
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.email && touched.email ? (
                                    <p className="focus-border text-danger">
                                    {errors.email}
                                    </p>
                                ) : null
                            }
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={values.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.phone && touched.phone ? (
                                <p className="focus-border text-danger">
                                    {errors.phone}
                                </p>
                                ) : null
                            }
                            <input
                                type="url"
                                name="website"
                                placeholder="Website URL"
                                value={values.website}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {
                                errors.website && touched.website ? (
                                <p className="focus-border text-danger">
                                    {errors.website}
                                </p>
                                ) : null
                            }
                            <textarea
                                type="textarea"
                                name="message"
                                placeholder="Your message"
                                rows={3}
                                value={values.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="form-row mb-4">
                            <ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
                        </div>
                        {
                            isLoading ? <ButtonLoader/> : (
                                <input
                                    type="submit"
                                    className="btn btn-success"
                                    defaultValue="Send"
                                />
                            )
                        }
                        {
                            isSubmitted && <p className="text-primary pt-3">Thank you for submitting the form, We will contact you soon.</p>
                        }
                    </form>
                </div>
            </div>
        </>
    )
  }