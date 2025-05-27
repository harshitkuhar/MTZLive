"use client";
import { useFormik } from "formik";
import { WebFormValidation } from "../form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "../ButtonLoader";
import { usePathname } from "next/navigation";

export default function Form(){

  const pathName = usePathname();
  

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    website: "",
    pathName: pathName.replace(/.php/g, "").replace('/', '')
  }
  
  const [isLoading, setIsLoading] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: WebFormValidation,
    onSubmit: async function(values, { resetForm }){
      setIsLoading(true);
      setIsSubmitted(false)
      const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/web/mail/v1/send`, {
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
    return(
      <section className="ranking-form webdevelopment">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">

              {
                pathName == '/smo-packages.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO PROMOTE SOCIAL PLATFORMS
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit below details and we will get in touch with you to discuss on same
                    </p>
                  </div>
                ) : pathName == '/local-seo-packages.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO HAVE A FREE WEBSITE AUDIT?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                      Excited ! to get your website rank in search engines. Submit the details <br/> below to get your website audit report within 24 hours.
                    </p>
                  </div>
                ) : pathName == '/orm-packages.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO PROMOTE YOUR BRAND
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss on ORM for your brand.
                    </p>
                  </div>
                ) : pathName == '/ppc-packages.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO PROMOTE USING PAY PER CLICK?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss <br/> on PPC for your website.
                    </p>
                  </div>
                ) : pathName == '/aso-packages.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO OPTIMIZE APPs STORE?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss on APPs Store Optimization.
                    </p>
                  </div>
                ) :
                  <div className="form-heading">
                    <h2 className="title text-white">
                      WOULD YOU LIKE TO HAVE A FREE WEBSITE AUDIT?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30' }}>
                      Get Your Free Website Analysis Audit Report! <br /> &amp; {`We'll`} Tell
                      You What To Fix and How.
                    </p>
                  </div>
              }
            </div>
            <div className="col-md-12 text-center">
              <div className="row">
              <form method="post" id="website-analysis" className="row form-colom" onSubmit={handleSubmit}>
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
                      type="url"
                      name="website"
                      className="form-control effect-8"
                      placeholder="Website URL"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
