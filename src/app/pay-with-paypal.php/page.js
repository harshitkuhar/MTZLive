
import HappyClients from "../components/HappyClients";
import ContactSection from "../components/ContactSection";
import Link from "next/link";


export default function payWithPaypal() {

    const PAYPAL_ID = 'info@mediatrenz.com';
    const PAYPAL_SANDBOX = false;
    const PAYPAL_URL = PAYPAL_SANDBOX == true ? "https://www.sandbox.paypal.com/cgi-bin/webscr" : "https://www.paypal.com/cgi-bin/webscr";
    const PAYPAL_NOTIFY_URL = '';
    const PAYPAL_CANCEL_URL = '';
    const PAYPAL_RETURN_URL = '';
    const PAYPAL_CURRENCY = 'USD';

  return (
    <>
        {/* banner start*/}
        <div className="innerbanner" style={{backgroundImage: 'url(images2/mobile-app-portfolio-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <div className="page-title">Payment Page</div>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      <li className="breadcrumb-item active">Payment Page</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end*/}
        <section className="content-sec">
          <div className="container" style={{padding: '50px 0px'}}>
            <div className="row justify-content-center">
              <div className="col-sm-6" style={{backgroundColor: '#dbd8d5', borderRadius: '10px'}}>
                <form action={PAYPAL_URL} method="post">
                  <input type="hidden" name="business" defaultValue={PAYPAL_ID} />
                  <input type="hidden" name="cmd" defaultValue="_xclick" />
                  {/* <input type="hidden" name="notify_url" defaultValue="<?php echo PAYPAL_NOTIFY_URL; ?>" /> */}
                  <input type="hidden" name="item_name" defaultValue />
                  <input type="hidden" name="item_number" defaultValue={1} />
                  {/* <input type="hidden" name="currency_code" defaultValue={PAYPAL_CURRENCY} /> */}
                  {/* <input type="hidden" name="return" defaultValue="<?php echo PAYPAL_RETURN_URL; ?>" /> */}
                  {/* <input type="hidden" name="cancel_return" defaultValue="<?php echo PAYPAL_CANCEL_URL; ?>" /> */}
                  <div>
                    <h4 className="text-center" style={{textDecoration: 'underline', padding: '20px 0px'}}>Payment Details</h4>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="amount">Select Currency <span className="text-danger">*</span> </label>
                      <select name="currency_code" className="form-control">
                        <option disabled={true}>Currency</option>
                        <option value="USD">USD</option>
                        <option value="AUD">AUD</option>
                        <option value="BRL">BRL</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="HKD">HKD</option>
                        <option value="HUF">HUF</option>
                        <option value="ILS">ILS</option>
                        <option value="JPY">JPY</option>
                        <option value="MXN">MXN</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PHP">PHP</option>
                        <option value="PLN">PLN</option>
                        <option value="RUB">RUB</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TWD">TWD</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="amount">Invoice Amount <span className="text-danger">*</span> </label>
                      <input type="text" className="form-control" id="amount" name="amount" placeholder="Enter Amount" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" id="email" name="email" placeholder="Enter Email Address" required />
                    </div>
                  </div>
                  <div className="form-row pb-3 pt-2">
                    <div className="form-group m-auto">
                      <button id="pay_now_btn" className="btn btn-secondary text-center">Pay Now</button>
                    </div>  
                    {/* <div id="loader">
                              <img alt="loader" src="assets/img/payment-loder.gif" height="40" width="40">
                          </div>   */}
                  </div>
                </form>
              </div>  
            </div>
          </div>        
        </section>

        <HappyClients />
        <ContactSection />
    </>
  )
}
