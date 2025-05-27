"use client";
import { useFormik } from "formik";
import { WebsiteFormValidation } from "../form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "../ButtonLoader";
import { usePathname } from "next/navigation";

export default function ReputationForm(){

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

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues: initialValues,
      validationSchema: WebsiteFormValidation,
      onSubmit: async function(values, { resetForm }){
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
      <section className="ranking-form form1">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">

              {
                pathName == '/remove-complaints-services.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO REMOVE ONLINE COMPLAINTS?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss <br/> on remove online complaints.
                    </p>
                  </div>
                ) : pathName == '/bad-reviews-removal-services.php' ? (
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO REMOVE BAD REVIEWS?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss <br/> on bad reviews removal.
                    </p>
                  </div>
                ) :
                  <div className="form-heading">
                    <h2 className="title text-white">
                    WOULD YOU LIKE TO BUILD ONLINE REPUTATION?
                    </h2>
                    <p className="text-white" style={{ 'paddingBottom': '30px' }}>
                    Submit the below details and we will get in touch with you to discuss
                    <br />on online reputation for your brand.
                    </p>
                  </div>
              }
            </div>
            <div className="col-md-12 text-center">
              <div className="row">
                <form method="post" className="row form-colom" id="website-analysis" onSubmit={handleSubmit}>
                  <div className="col-md-6 mr0">
                    <div className="form-group">
                      <input
                        type="hidden"
                        name="pathName"
                      />
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
                      <p className="focus-border"></p>
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