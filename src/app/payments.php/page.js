
import HappyClients from "../components/HappyClients";
import ContactSection from "../components/ContactSection";
import Link from "next/link";


export default function Payments() {

  return (
    <>
        {/* banner start*/}
        <div className="innerbanner" style={{backgroundImage: 'url(images2/mobile-app-portfolio-banner.webp)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <div className="page-title">Payments</div>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="https://mediatrenz.com">Home</Link></li>
                      <li className="breadcrumb-item active">Payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end*/}

        <section className="cntct-locatn">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 cntct-box text-center">

              <Link href="https://buy.stripe.com/aFa8wQaMH50j5qY7sd1440p" className="stripe_btn"><i class="fi fi-brands-stripe"></i> Pay With STRIPE</Link>
              
              <Link href="pay-with-paypal.php" className="paypal_btn"><i className="fi fi-brands-paypal"></i> Pay With PAYPAL</Link>

              {/* <Link href="https://buy.stripe.com/aFa8wQaMH50j5qY7sd1440p" className="stripe_btn"><i class="fi fi-brands-stripe"></i> Pay With STRIPE</Link> */}
            </div>
            {/* <div className="col-lg-6 col-md-6 col-sm-12 cntct-box text-center">
              <Link href="https://buy.stripe.com/aFa8wQaMH50j5qY7sd1440p" className="stripe_btn"><i class="fi fi-brands-stripe"></i> Pay With STRIPE</Link>
            </div> */}
          </div>
        </div>
      </section>

        <HappyClients />
        <ContactSection />
    </>
  )
}