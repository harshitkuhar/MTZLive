import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title : "Mission and Values | MEDIATRENZ",
    meta_description : "Our mission is to engage with customers to grow their business using our digital marketing expertise and custom promotional strategy. We create value for your brand.",
    meta_keywords : "Mission and Values",
    og_title : "Mission and Values | MEDIATRENZ",
    og_description : "Our mission is to engage with customers to grow their business using our digital marketing expertise and custom promotional strategy. We create value for your brand.",
    og_image : "",
    og_url : "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/mission-and-values.php`, // Generate the canonical URL
    },
};

export default function Mission() {
    return(
      <>
        <div
          className="innerbanner"
          style={{ backgroundImage: "url(/images2/mission-banner.webp)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="breadcurmb-content">
                  <h1 className="page-title">Mission and Values</h1>
                  <div className="breadcrumb_item ul-li">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">Mission &amp; Values</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about-inner-section mission-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img">
                  <img
                    src="/images2/mission-img.webp"
                    className="img-fluid rounded"
                    alt="Mission and Value"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="title">Our Mission</h2>
                <p>
                  Our mission is to associate with customers for their business growth
                  by using our digital marketing expertise and custom promotion
                  strategy. We create value for your brand. We create diversified
                  client base including companies and individuals operating in several
                  different fields and economies.
                </p>
                <p>
                  We provide pioneering and futuristic digital marketing solutions
                  that take into account the individual needs and unique demand of
                  each client. We endeavour to be the leading digital marketing
                  service provider across the world by revolutionizing the industry
                  and setting novel standards of professionalism and accomplishment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="about-inner-section mission-sec"
          style={{ background: "#F6F7F9" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 order-lg-2">
                <div className="img">
                  <img
                    src="/images2/values-img.webp"
                    className="img-fluid rounded"
                    alt="Our Company Value"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <h2 className="title">Our Values</h2>
                <p>
                  Our values are the guiding principles upon which MEDIATRENZ was
                  founded and how we strive to conduct our business on a frequent
                  basis.
                </p>
                <p>
                  We have placed a general set of values at the core of how we do our
                  business. Our values are not exceptional, but capture what we do
                  when we are at our finest:
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about-inner-section mission-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img">
                  <img
                    src="/images2/servedel-img.webp"
                    className="img-fluid rounded"
                    alt="Our Exclusive Services"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="title">Service Delivery</h2>
                <p>
                  We are in the business to serve clients. We work hard to receive
                  their trust by focusing on their requirements and delivering
                  outstanding service.
                </p>
                <h2 className="title">Team Work</h2>
                <p>
                  We think about all our stakeholders and work best as one team. We
                  bring the finest of ourselves to work and support each other to
                  identify our potential.
                </p>
                <h2 className="title">Integrity</h2>
                <p>
                  We take risk honestly and manage it vigilantly. We reward
                  impartiality and miscellany and exercise decision with contemplation
                  and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <HappyClients/>
        <ContactSection />
      </>
    )
}
