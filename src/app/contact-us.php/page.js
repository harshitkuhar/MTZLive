import Link from "next/link";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title : "Contact Us | MEDIATRENZ",
  description : "MEDIATRENZ provides a wide range of services to all its clients to increase the awareness of their business. We are offering from web designing, Php develop to SEO service.",
  keywords : "",
  og_title : "Contact Us | MEDIATRENZ",
  og_description : "MEDIATRENZ provides a wide range of services to all its clients to increase the awareness of their business. We are offering from web designing, Php develop to SEO service.",
  og_image : "",
  og_url : "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/contact-us.php`, // Generate the canonical URL
  },
};

export default function Contact() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(images2/contact-bg.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Contact Us</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cntct-locatn">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 cntct-box clr2">
              <h2 className="title">USA OFFICE</h2>
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rs-marker" />
                  </span>{" "}
                  651 N Broad St STE 206, New Castle, Middletown, DE 19709 USA
                </li>
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rr-phone-call" />
                  </span>{" "}
                  +1-302-918-5473
                </li>
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rr-envelope" />
                  </span>{" "}
                  info@mediatrenz.com
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 cntct-box clr1">
              <h2 className="title">INDIA OFFICE</h2>
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rs-marker" />
                  </span>{" "}
                  G 12, First Floor, Sector - 63, NOIDA Delhi-NCR - 201301
                </li>
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rr-phone-call" />
                  </span>{" "}
                  +91-98 7118 1711
                </li>
                <li>
                  <span className="fa-li">
                  <i className="fi fi-rr-envelope" />
                  </span>{" "}
                  info@mediatrenz.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 pl-2 pr-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4086701692117!2d77.38647141508226!3d28.61751148242373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a19d1298655b%3A0x5c0f0ca33a9877c6!2sMEDIATRENZ!5e0!3m2!1sen!2sus!4v1639562902203!5m2!1sen!2sus"
                width="100%"
                height="380px"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>{" "}
            <br />
            <div className="col-md-6 pl-2 pr-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4086695829974!2d77.38647141744387!3d28.617511499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8ba8fada7eb%3A0x64dc1e645ba049b3!2sMEDIATRENZ!5e0!3m2!1sen!2sin!4v1638788208033!5m2!1sen!2sin"
                width="100%"
                height="380px"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
              />
            </div>
            <div className="col-md-6 rightsec">
              <h2 className="title text-white">
                GET IN TOUCH WITH US FOR DISCUSSING NEW PROJECTS &amp; IDEAS
              </h2>

              <ContactForm/>

            </div>
            <div className="col-md-6">
              <img
                src="/images2/new/cloud-logos.jpg"
                className="img-responsive"
                alt="Cloud Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="clients-sec cont-b">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle">Valuable Clients</h4>
              <h2 className="title">Our happy clients all over the world</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="partners-block">
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/ibibo-logo.webp"
                        data-src="/images2/all-images/ibibo-logo.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/religare.webp"
                        data-src="/images2/all-images/religare.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-3.webp"
                        data-src="/images2/client-3.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/bajaj.webp"
                        data-src="/images2/all-images/bajaj.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-19.webp"
                        data-src="/images2/client-19.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/agency-garment-packing.webp"
                        data-src="/images2/all-images/agency-garment-packing.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-21.webp"
                        data-src="/images2/client-21.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/jungle-boys-logo.webp"
                        data-src="/images2/all-images/jungle-boys-logo.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-23.webp"
                        data-src="/images2/client-23.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-24.webp"
                        data-src="/images2/client-24.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/winclub88.webp"
                        data-src="/images2/all-images/winclub88.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-26.webp"
                        data-src="/images2/client-26.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-27.webp"
                        data-src="/images2/client-27.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/all-images/prsvr.webp"
                        data-src="/images2/all-images/prsvr.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-29.webp"
                        data-src="/images2/client-29.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="">
                    <div className="card">
                      <img
                        className="card-img-top lazy entered loaded"
                        src="/images2/client-30.webp"
                        data-src="/images2/client-30.webp"
                        alt="img"
                        data-ll-status="loaded"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <Link className="btn btn-maincolor mt-30" href="clients.php">
                View All Clients
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
