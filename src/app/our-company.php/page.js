import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "About Us | MEDIATRENZ",
  description: "MEDIATRENZ is known worldwide for its best services, we have many clients in India and outside India also. We have a team of experts to provide you the best services.",
  keywords: "About Us",
  og_title: "About Us | MEDIATRENZ",
  og_description: "MEDIATRENZ is known worldwide for its best services, we have many clients in India and outside India also. We have a team of experts to provide you the best services.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/our-company.php`, // Generate the canonical URL
  },
};

export default function Ourcompany() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(images2/inner-banner.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Our Company</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Our Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about-inner-section">
        <div className="container">
          <div className="row clearfix">
            {/*Image Column*/}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h4 className="element-subtitle">15 YEARS OF EXPERIENCE</h4>
              <h2 className="title mb-0">
                MEDIATRENZ IS A HIGHLY CAPABLE SEO, WEB DESIGN AND DEVELOPMENT
                AGENCY THAT IS WELL EQUIPPED TO BE YOUR COMPANY’S PARTNER IN
                GROWTH.
              </h2>
            </div>
            {/*Text Column*/}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <p className="mb-0 txt-ali">
                We are also a very successful SEO, Web Design and Development
                agency. As experts in digital marketing, we can ensure that your
                company has a higher ranking than before on search engine
                results pages. We can also make sure that your company has an
                excellent reputation on the internet so that people looking for
                it online will only come across positive information. At
                MEDIATRENZ, our aim is to offer the best possible range of
                services at extremely competitive prices. As a matter of fact,
                we offer complete support to ensure that your company is
                immensely successful using internet marketing , Web design and
                Development Sevices . Since increasing numbers of customers use
                the internet to reach you, we help you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-mediatrenz">
        <div className="container">
          <div className="row clearfix">
            {/*Image Column*/}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="about-img-left">
                <div className="stbox2 clearfix">
                  <div className="imgbox">
                    <img src="images2/author-02.webp" alt="Our Company" />
                  </div>
                  <div className="boxtext2">
                    <div className="stnum">3.5k</div>
                    <div className="stsub">Satisfied Client</div>
                  </div>
                </div>
              </div>
            </div>
            {/*Text Column*/}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="inner">
                <h4 className="element-subtitle txt-wh">WHY MEDIATRENZ?</h4>
                <h2 className="title text-white">
                  HOW MEDIATRENZ HELP YOUR BUSINESS GROW AND SUCCESSFUL
                </h2>
                <div id="accordionExample" className="accordion">
                  <div className="card">
                    <div
                      id="headingOne"
                      className="card-header shadow-sm border-0"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <Link
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          className="d-block position-relative text-uppercase collapsible-link py-2"
                        >
                          <span>01.</span> SPECIFIC
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                      className="collapse show"
                    >
                      <div className="card-body">
                        <p className="m-0">
                          We sit down with you to define your objectives
                          precisely and lay out a detailed plan to accomplish
                          them. Then we establish a firm time-line and assign
                          the resources required to develop your project most
                          effectively.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      id="heading2"
                      className="card-header shadow-sm border-0"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <Link
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse2"
                          aria-expanded=""
                          aria-controls="collapse2"
                          className="d-block position-relative text-uppercase collapsible-link py-2"
                        >
                          <span>02.</span> MEASURABLE
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapse2"
                      aria-labelledby="heading2"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body">
                        <p className="m-0">
                          To keep your project progress on track, we segment the
                          job into manageable chunks and establish milestones
                          and measurements for each stage. Issues that threaten
                          to derail any part of the project or cause a missed
                          deadline get top priority attention and are addressed
                          thoroughly and immediately.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      id="heading3"
                      className="card-header shadow-sm border-0"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <Link
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded=""
                          aria-controls="collapse3"
                          className="d-block position-relative text-uppercase collapsible-link py-2"
                        >
                          <span>03.</span> AGREED UPON
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapse3"
                      aria-labelledby="heading3"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body">
                        <p className="m-0">
                          We keep our promises. Once you have signed off on the
                          plan, you can be assured that we will come through for
                          you. We keep the channels of communication wide open
                          in case you decide you want to make changes. But
                          unless you request otherwise, we stick to the plan and
                          deliver exactly what you want, in the projected
                          time-frame.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      id="heading4"
                      className="card-header shadow-sm border-0"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <Link
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded=""
                          aria-controls="collapse4"
                          className="d-block position-relative text-uppercase collapsible-link py-2"
                        >
                          <span>04.</span> REALISTIC
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapse4"
                      aria-labelledby="heading4"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body">
                        <p className="m-0">
                          We are dedicated to producing top-notch solutions on
                          every project. To that end, we ensure that our plans
                          are thorough and that we apply the appropriate
                          resources to get the job done right. If we believe
                          something could be better, we’ll let you know and
                          leave the decision to you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div
                      id="heading5"
                      className="card-header shadow-sm border-0"
                    >
                      <h6 className="mb-0 font-weight-bold">
                        <Link
                          href="#"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded=""
                          aria-controls="collapse5"
                          className="d-block position-relative text-uppercase collapsible-link py-2"
                        >
                          <span>05.</span> TIME-FRAMED
                        </Link>
                      </h6>
                    </div>
                    <div
                      id="collapse5"
                      aria-labelledby="heading5"
                      data-parent="#accordionExample"
                      className="collapse"
                    >
                      <div className="card-body">
                        <p className="m-0">
                          Your project stays on track because have the strongest
                          professional commitment to honoring agreed-upon
                          timelines. To that end, our methodology includes
                          action plans that monitor progress and detect, isolate
                          and resolve problems as they arise, before they become
                          major obstacles.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-skills">
        <div className="ovelay" />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4 className="element-subtitle">OUR Skills</h4>
              <h2 className="title">FOLLOW THE DIGITAL TRENDS</h2>
              <div className="skills-con">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 mt-30">
                      <div className="progress" data-percentage={95}>
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">
                          <div>95%</div>
                        </div>
                      </div>
                      <div className="skilltext">
                        ONLINE <br />
                        MARKETING
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 mt-30">
                      <div className="progress" data-percentage={90}>
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">
                          <div>90%</div>
                        </div>
                      </div>
                      <div className="skilltext">
                        WEB <br />
                        DESIGN
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 mt-30">
                      <div className="progress" data-percentage={92}>
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">
                          <div>92%</div>
                        </div>
                      </div>
                      <div className="skilltext">
                        WEB <br />
                        DEVELOPMENT
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6 mt-30">
                      <div className="progress" data-percentage={80}>
                        <span className="progress-left">
                          <span className="progress-bar" />
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar" />
                        </span>
                        <div className="progress-value">
                          <div>80%</div>
                        </div>
                      </div>
                      <div className="skilltext">
                        MOBILE <br />
                        APPLICATION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5" />
          </div>
        </div>
      </section>
      <HappyClients />
      <ContactSection />
    </>
  );
}
