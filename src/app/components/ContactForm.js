'use client';
import { useFormik } from "formik";
import { ContactUsValidation } from "./form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "./ButtonLoader";
import ReCAPTCHA from 'react-google-recaptcha';

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  pathName: "Contact Us"
};

export default function ContactForm() {

  const [isLoading, setIsLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isVerified, setIsVerified] = useState(false);

  const onReCAPTCHAChange = (value) => {
    if (value) {
        setIsVerified(true);
    } else {
        setIsVerified(false);
    }
  }

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: ContactUsValidation,
    onSubmit: async function(values, { resetForm }){
        if (!isVerified) {
            alert('Please complete the captcha verification to proceed.');
            return;
        }
        setIsLoading(true);
        setIsSubmitted(false);
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/contact/mail/v1/send`, {
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
        <form role="form" method="post" id="contact_form" className="customfrm" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group col-md-6">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.name && touched.name ? (
                        <p className="focus-border text-danger mt-2">
                        {errors.name}
                        </p>
                    ) : null
                }
                </div>
                <div className="form-group col-md-6">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.email && touched.email ? (
                        <p className="focus-border text-danger mt-2">
                        {errors.email}
                        </p>
                    ) : null
                }
                </div>
                <div className="form-group col-md-12">
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {
                    errors.subject && touched.subject ? (
                        <p className="focus-border text-danger mt-2">
                        {errors.subject}
                        </p>
                    ) : null
                }
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                <textarea
                    className="form-control effect-8 tft2"
                    type="textarea"
                    name="message"
                    placeholder="Your message"
                    rows={3}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                </div>
            </div>
            <div className="form-row mb-4 ml-1">
                <ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
            </div>
            <div className="form-group m-auto text-center">
                {
                    isLoading ? <ButtonLoader/> : (
                        <input
                            type="submit"
                            className="btn btn-maincolor"
                            id="btnContactUs"
                            defaultValue="Send"
                        />
                    )
                }
                {
                    isSubmitted && <p className="text-white pt-3">Thank you for submitting the form, We will contact you soon.</p>
                }
            </div>
        </form>
    </>
  )
}
