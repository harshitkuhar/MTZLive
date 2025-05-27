'use client';
import Link from "next/link"
import { useFormik } from "formik";
import { ContactFormValidation } from "./form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "./ButtonLoader";
import ReCAPTCHA from 'react-google-recaptcha';

const initialValues = {
  name: "",
  email: "",
  phone: "",
  website: "",
  monthly_budget: "",
  message: "",
  pathName: "Above Footer Form"
};

export default function ContactSection() {

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
    validationSchema: ContactFormValidation,
    onSubmit: async function(values, { resetForm }){
      if (!isVerified) {
        alert('Please complete the captcha verification to proceed.');
        return;
      }
      setIsLoading(true);
      setIsSubmitted(false)
      // if (isVerified) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/footer/mail/v1/send`, {
          headers: {"Content-Type":'application/json'},
          method: 'POST',
          body: JSON.stringify(values)
        });
      // }
      const result = await response.json();
      setIsLoading(false);
      resetForm();
      setIsSubmitted(true);
      setTimeout(() => { setIsSubmitted(false) }, 3000);
    }
  })

  return (
    <>
      <section className="contact-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 left-cbox">
              <div className="formbox">
                <div className="title-mb">
                  <h2 className="element-subtitle">Discover</h2>
                  <h2 className="title">How we can help your business grow</h2>
                </div>
                <form className="customfrm" method="post" id="footer-mailbox" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6 col-sm-6 col-6 col-360full">
                      <input
                        type="text"
                        className="form-control tft effect-8"
                        name="name"
                        placeholder="Full Name"
                        required=""
                        maxLength={75}
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
                    <div className="form-group col-md-6 col-sm-6 col-6 col-360full">
                      <input
                        type="email"
                        name="email"
                        className="form-control effect-8 tft"
                        placeholder="Email Address"
                        required=""
                        maxLength={100}
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
                    <div className="form-group col-md-6 col-sm-6 col-6 col-360full">
                      <input
                        type="phone"
                        className="form-control effect-8 tft"
                        name="phone"
                        placeholder="Phone No."
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
                    <div className="form-group col-md-6 col-sm-6 col-6 col-360full">
                      <p
                        className="text-white mb-0"
                        style={{ fontSize: 11, paddingTop: 8 }}
                      >
                        By submitting your phone number, you agree to receiving texts
                        from MEDIATRENZ.
                      </p>
                    </div>
                    <div className="form-group col-md-12 col-sm-12 col-12 col-360full">
                      <input
                        type="url"
                        className="form-control effect-8 tft"
                        name="website"
                        placeholder="Website URL"
                        maxLength={100}
                        value={values.website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {
                        errors.website && touched.website ? (
                          <p className="focus-border text-danger mt-2">
                            {errors.website}
                          </p>
                        ) : null
                      }
                    </div>
                    <div className={errors.monthly_budget ? "form-group col-md-12 mb-0" : "form-group col-md-12"} style={{'display': 'flex', 'alignItems': 'center'}}>
                      <span className="currency">$</span>
                      <input
                        type="text"
                        className="form-control effect-8 tft"
                        name="monthly_budget"
                        placeholder="What is your projected monthly budget for this project?"
                        min={1}
                        value={values.monthly_budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {
                      errors.monthly_budget && touched.monthly_budget ? (
                        <p className="focus-border text-danger mt-2 pl-2">
                          {errors.monthly_budget}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control effect-8 tft2"
                        name="message"
                        placeholder="Your Ideas (optional)"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="g-recaptcha-claim_your_free_seo_audit" style={{'paddingLeft': '10px'}}>
                      <ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
                    </div>
                    <div className="form-group m-auto">
                    {
											isLoading ? <ButtonLoader/> : (
                        <input
                          type="submit"
                          className="btn btn-maincolor ajax_mail_sender"
                          name="footer_mailer"
                          defaultValue="Send"
                        />
                      )
                    }
                    {
                      isSubmitted && <p className="text-white pt-3">Thank you for submitting the form, We will contact you soon.</p>
                    }
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 right-cbox ">
              <div className="clp">
                <div className="title-mb">
                  <h2 className="element-subtitle">Lets Talk</h2>
                  <h2 className="title">Ready to speak? Give us a ring or e-mail.</h2>
                </div>
                <div className="cinfo">
                  <Link href="callto:+1 302-918-5473">
                    <div className="phone">+1 302-918-5473</div>
                  </Link>{" "}
                  <div className="or">OR</div> <div className="slash">/</div>{" "}
                  <Link href="mailto:info@mediatrenz.com">
                    <div className="email">info@mediatrenz.com</div>
                  </Link>
                </div>
                <div className="stats">
                  <div className="stbox clearfix">
                    <div className="icon">
                    <i className="fi fi-tr-corporate-alt"></i>
                    </div>
                    <div className="icontext">
                      <strong>2000+</strong> Clients Worldwide
                    </div>
                  </div>
                  <div className="stbox clearfix">
                    <div className="icon">
                    <i className="fi fi-ts-users-alt"></i>
                    </div>
                    <div className="icontext">
                      <strong>50+</strong> Team of Professionals
                    </div>
                  </div>
                  <div className="stbox clearfix">
                    <div className="icon">
                    <i className="fi fi-ts-globe-pointer"></i>
                    </div>
                    <div className="icontext">
                      <strong>20+</strong> Countries Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
