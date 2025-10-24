"use client";
import { useFormik } from "formik";
import { WebsiteFormValidation } from "../components/form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "../components/ButtonLoader";
import { usePathname } from "next/navigation";
import ReCAPTCHA from 'react-google-recaptcha';


export default function AuditForm(){

    const pathName = usePathname();

    const initialValues = {
      name: "",
      email: "",
      phone: "",
      message: "",
      pathName: pathName.replace(/.php/g, "").replace('/', '')
    }
    
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
      validationSchema: WebsiteFormValidation,
      onSubmit: async function(values, { resetForm }){
        if (!isVerified) {
            alert('Please complete the captcha verification to proceed.');
            return;
        }
        setIsLoading(true);
        setIsSubmitted(false)
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/mail/v1/send`, {
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
        <form method="post" className="row form-colom" id="website-analysis" onSubmit={handleSubmit}>
        <div className="col-md-6 mr0">
            <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control effect-8"
                placeholder="Name"
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
        </div>
        <div className="col-md-6 mr0">
            <div className="form-group">
            <input
                type="email"
                name="email"
                className="form-control effect-8"
                placeholder="Email"
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
        </div>
        <div className="col-md-6 mr0">
            <div className="form-group">
            <input
                type="text"
                name="phone"
                className="form-control effect-8"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {
                errors.phone && touched.phone ? (
                <p className="focus-border text-danger mt-2">
                    {errors.phone}
                </p>
                ) : null
            }
            </div>
        </div>
        <div className="col-md-6 mr0">
            <div className="form-group">
            <input
                type="text"
                name="message"
                className="form-control effect-8"
                placeholder="Notes"
                value={values.message}
                onChange={handleChange}
            />
            <p className="focus-border">
            </p>
            </div>
        </div>

        <div className="form-row mb-4 ml-1">
            <ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
        </div>

        <div className=" col-md-12 text-center">
            {
            isLoading ? <ButtonLoader/> : (
                <input
                type="submit"
                className="btn btn-success ajax_mail_sender"
                name="freeWebsite"
                defaultValue="Submit Now"
                />
            )
            }
            {
            isSubmitted && <p className="text-white pt-3">Thank you for submitting the form, We will contact you soon.</p>
            }
        </div>
        </form>
    )
  }