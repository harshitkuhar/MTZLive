'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormik } from "formik";
import ButtonLoader from "../ButtonLoader";
import { PopupFormValidation } from '../form_validation/Validation';

const initialValues = {
	name: "",
	email: "",
	phone: "",
	website: ""
}

const FreeSEOAudit = () => {
    const [showModal, setShowModal] = useState(false);
	const [isVerified, setIsVerified] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
  	const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
		setTimeout(() => {
			setShowModal(true)
		}, 5000)
    }, []);

    const handleClose = () => setShowModal(false);

	const onReCAPTCHAChange = (value) => {
		if (value) {
			setIsVerified(true);
		} else {
			setIsVerified(false);
		}
	}

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues: initialValues,
      validationSchema: PopupFormValidation,
      onSubmit: async function(values, { resetForm }){
		if (!isVerified) {
			alert('Please complete the captcha verification to proceed.');
			return;
		}
        setIsLoading(true);
      	setIsSubmitted(false)
			const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/wp-json/popup/mail/v1/send`, {
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
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{'zIndex': '9992'}}>
					<div className="modal-dialog modal-dialog-centered" role="dialog">
						<div className="row justify-content-center">
							<div className="col-4 p-sm-0 d-none d-sm-block ">
								<div style={{background: '#005cff', height: '100%'}}>
									<Image src="/images2/Seo-popup2.png" width={500} height={500} alt="Seo-popup" />
									</div>
							</div>
							<div className="col-sm-6 p-sm-0 col-xs-12">
								<div className="modal-content border-0">
									<div className="modal-header" style={{minHeight: '70px', background: '#005cff', color: '#fff', padding: '0px'}}>
										{/* <img src="images2/Seo-popup.png" alt="Seo-popup"> */}
										<h5 className="modal-title" id="leadformLabel" style={{fontSize: '28px', paddingTop: '16px', paddingLeft: '16px'}}>Claim Your Free SEO Audit <span style={{fontSize: '18px'}}>Limited Period Offer</span></h5>
										<h6 className="modal-title" id="leadformLabel" />
										<button type="button" className="close btn-close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
											<span aria-hidden="true">×</span>
										</button>
									</div>
									<form method="post" onSubmit={handleSubmit}>
										<div className="modal-body">
											<div className="form-group">
												<input type="text" className="form-control" id="name" name="name" placeholder="Name"
												value={values.name}
												onChange={handleChange}
												onBlur={handleBlur} />
												{
													errors.name && touched.name ? (
													<p className="focus-border text-danger mt-2">
														{errors.name}
													</p>
													) : null
												}
											</div>
											
											<div className="form-group">
												<input type="email" className="form-control" id="email1" name="email" aria-describedby="emailHelp" placeholder="Enter email"
												value={values.email}
												onChange={handleChange}
												onBlur={handleBlur} />
												{
													errors.email && touched.email ? (
													<p className="focus-border text-danger mt-2">
														{errors.email}
													</p>
													) : null
												}
											</div>
											<div className="form-group">
												<input type="text" className="form-control" id="Number" name="phone" placeholder="Phone Number"
												value={values.phone}
												onChange={handleChange}
												onBlur={handleBlur} />
												{
													errors.phone && touched.phone ? (
													<p className="focus-border text-danger mt-2">
														{errors.phone}
													</p>
													) : null
												}
											</div>
											<div className="form-group">
												<input type="text" className="form-control" id="weburl" name="website" placeholder="Website URL"
												value={values.website}
												onChange={handleChange}
												onBlur={handleBlur} />
												{
													errors.website && touched.website ? (
													<p className="focus-border text-danger mt-2">
														{errors.website}
													</p>
													) : null
												}
											</div>
											<div className="form-group">
												<textarea className="form-control" id="Message-seo" name="message" placeholder="Message" rows={3} defaultValue={""} />
											</div>
											<div className="form-group">
												<div className="g-recaptcha-claim_your_free_seo_audit" />
													<ReCAPTCHA sitekey="6LdG6aMqAAAAABxKDu4RauCIDi-woxUW45owprTR" onChange={onReCAPTCHAChange}/>
												</div>
											</div>
											<div className="modal-footer border-top-0 d-flex justify-content-center p-0 pb-4">
												<input type="hidden" name="form_page_name" defaultValue="Claim Your Free SEO Audit" />
												<input type="hidden" name="form_name" defaultValue="claim_your_free_seo_audit" />
												{
													isLoading ? <ButtonLoader/> : (
														<input type="submit" className="btn bg-btn ajax_mail_sender" name="freeSeoAudit" value="Get My Free SEO Review Now!" />
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
				</div>
            )}
        </>
    );
};

export default FreeSEOAudit;
