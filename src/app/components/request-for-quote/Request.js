"use client"
import Link from "next/link";
import ReCAPTCHA from 'react-google-recaptcha';
import ContactSection from "../ContactSection";
import HappyClients from "../HappyClients";
import PartnerSlider from "../PartnerSlider";
import RequestJson from "../../json/request-for-quote.json";
import { useFormik } from "formik";
import { RequestFormValidation } from "../form_validation/Validation";
import { useState } from 'react';
import ButtonLoader from "../ButtonLoader";
import { usePathname } from "next/navigation";

export default function Request() {

  const pathName = usePathname();
  const data = RequestJson.find((item) => item.slug === pathName)

  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    mobile: "",
    country: "",
    city: "",
    website: "",
    keywords: "",
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
    validationSchema: RequestFormValidation,
    onSubmit: async function(values, { resetForm }){
      if (!isVerified) {
        alert('Please complete the captcha verification to proceed.');
        return;
      }
      // console.log(values);
      setIsLoading(true);
      setIsSubmitted(false)
      const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/request/mail/v1/send`, {
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
      <section className="partner-with-us text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h4 className="element-subtitle">Lets get started</h4>
              <h1 className="page-title">Request A Quote Now</h1>
              <h2 className="title">
                Contact us to create a corporate website, a portal, or to make your
                website rank higher in search engine.
              </h2>
              <p>
                Get a free quote for your website. Enter your name, email, contact
                details, phone number and also add your website URL along with
                Keywords to get started with our awesome and reasonable digital
                marketing packages.
              </p>
            </div>
            <div className="col-md-12 intro-text">
              Please fill the form below and one of our team members will get in
              touch with you asap to discuss your requirements. Alternatively, You
              may also call us on{" "}
              <Link href="callto:+91-9871181711"> +91-9871181711</Link>,
              <Link href="callto:+1-315 512 2233"> +1-315 512 2233(US)</Link> or{" "}
              <Link href="https://wa.me/919871181711/?text=https://mediatrenz.com/">
                {" "}
                WhatsApp
              </Link>{" "}
              Us or send us an email to{" "}
              <Link href="mailto:info@mediatrenz.com"> info@mediatrenz.com</Link> to
              discuss your project further!
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container request-quote ">
          <div className="row">
            <div className="col-md-6">
              <form
                role="form"
                method="post"
                id="reused_form"
                className="customfrm"
                onSubmit={handleSubmit}
              >
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
                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      name="telephone"
                      className="form-control"
                      id="telephone"
                      placeholder="Telephone"
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.telephone && touched.telephone ? (
                        <p className="focus-border text-danger mt-2">
                          {errors.telephone}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.mobile && touched.mobile ? (
                        <p className="focus-border text-danger mt-2">
                          {errors.mobile}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-group col-md-12">
                    <select id="country" name="country" className="form-control"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option selected="">Select Country</option>
                      <option>Afghanistan</option>
                      <option>Åland Islands</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>American Samoa</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Anguilla</option>
                      <option>Antarctica</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Aruba</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Belarus</option>
                      <option>Belau</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bermuda</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bonaire, Saint Eustatius and Saba</option>
                      <option>Bosnia and Herzegovina</option>
                      <option>Botswana</option>
                      <option>Bouvet Island</option>
                      <option>Brazil</option>
                      <option>British Indian Ocean Territory</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burundi</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Cape Verde</option>
                      <option>Cayman Islands</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Christmas Island</option>
                      <option>Cocos (Keeling) Islands</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Congo (Brazzaville)</option>
                      <option>Congo (Kinshasa)</option>
                      <option>Cook Islands</option>
                      <option>Costa Rica</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Curaçao</option>
                      <option>Cyprus</option>
                      <option>Czech Republic</option>
                      <option>Denmark</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Ethiopia</option>
                      <option>Falkland Islands</option>
                      <option>Faroe Islands</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>French Guiana</option>
                      <option>French Polynesia</option>
                      <option>French Southern Territories</option>
                      <option>Gabon</option>
                      <option>Gambia</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Gibraltar</option>
                      <option>Greece</option>
                      <option>Greenland</option>
                      <option>Grenada</option>
                      <option>Guadeloupe</option>
                      <option>Guam</option>
                      <option>Guatemala</option>
                      <option>Guernsey</option>
                      <option>Guinea</option>
                      <option>Guinea-Bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Heard Island and McDonald Islands</option>
                      <option>Honduras</option>
                      <option>Hong Kong</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Isle of Man</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Ivory Coast</option>
                      <option>Jamaica</option>
                      <option>Japan</option>
                      <option>Jersey</option>
                      <option>Jordan</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Macao</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Martinique</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mayotte</option>
                      <option>Mexico</option>
                      <option>Micronesia</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Montserrat</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>New Caledonia</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>Niue</option>
                      <option>Norfolk Island</option>
                      <option>North Korea</option>
                      <option>North Macedonia</option>
                      <option>Northern Mariana Islands</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palestinian Territory</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Pitcairn</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Puerto Rico</option>
                      <option>Qatar</option>
                      <option>Reunion</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>São Tomé and Príncipe</option>
                      <option>Saint Barthélemy</option>
                      <option>Saint Helena</option>
                      <option>Saint Kitts and Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Martin (Dutch part)</option>
                      <option>Saint Martin (French part)</option>
                      <option>Saint Pierre and Miquelon</option>
                      <option>Saint Vincent and the Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Georgia/Sandwich Islands</option>
                      <option>South Korea</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Svalbard and Jan Mayen</option>
                      <option>Swaziland</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>Timor-Leste</option>
                      <option>Togo</option>
                      <option>Tokelau</option>
                      <option>Tonga</option>
                      <option>Trinidad and Tobago</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Turks and Caicos Islands</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom (UK)</option>
                      <option>United States (US)</option>
                      <option>United States (US) Minor Outlying Islands</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Vatican</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Virgin Islands (British)</option>
                      <option>Virgin Islands (US)</option>
                      <option>Wallis and Futuna</option>
                      <option>Western Sahara</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                    {
                      errors.country && touched.country ? (
                        <p className="focus-border text-danger mt-2">
                          {errors.country}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.city && touched.city ? (
                        <p className="focus-border text-danger mt-2">
                          {errors.city}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="website"
                      className="form-control"
                      id="website"
                      placeholder="Your Website Url"
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
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control effect-8 tft2"
                      name="keywords"
                      id="keywords"
                      placeholder="Keywords"
                      value={values.keywords}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {
                      errors.keywords && touched.keywords ? (
                        <p className="focus-border text-danger mt-2">
                          {errors.keywords}
                        </p>
                      ) : null
                    }
                  </div>
                  <div className="form-group col-md-12">
                    <textarea
                      className="form-control effect-8 tft2"
                      name="message"
                      id="message"
                      placeholder="Additional Information"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="form-row mb-3">
                  <div className="col-sm-6 col-md-6 col-6 d-flex align-items-center">
                    <ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
                  </div>
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
            </div>
            <div className="col-md-6 sec-right"></div>
          </div>
        </div>
      </section>
      <PartnerSlider/>
      <section className="pricing-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle text-white">PRICING PACKAGES</h4>
              <h2 className="title text-white">CHOOSE YOUR BEST PLAN</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img src="/images2/seo.webp" alt="SEO Services" />
                      </div>
                      <span>SEO SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">349</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link className="btn btn-maincolor" href="seo-packages.php">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img src="/images2/smo.webp" alt="SMO Services" />
                      </div>
                      <span>SMO SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">280</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link className="btn btn-maincolor" href="smo-packages.php">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img src="/images2/ppc.webp" alt="PPC Services" />
                      </div>
                      <span>PPC SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">150.00</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link className="btn btn-maincolor" href="ppc-packages.php">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 col-360full">
              <div className="price_content clearfix">
                <div className="price_head clearfix">
                  <div className="price_head_content clearfix">
                    <div className="head">
                      <div className="icon">
                        <img src="/images2/orm.webp" alt="ORM Services" />
                      </div>
                      <span>ORM SERVICES</span>
                    </div>
                  </div>
                  <div className="price_tag clearfix">
                    <span className="price">
                      <span className="sign">$</span>
                      <span className="currency">380</span>
                      <div className="month">Monthly Package</div>
                    </span>
                  </div>
                </div>
                <div className="price_btn clearfix">
                  <Link className="btn btn-maincolor" href="orm-packages.php">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HappyClients/>
      <ContactSection />
    </>
  );
}
