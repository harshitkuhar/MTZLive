import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "",
  description: "",
  keywords: "",
  og_title: "",
  og_description: "",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/mobile-virtual-assistant.php`, // Generate the canonical URL
  },
};

export default function Virtualmobile() {
  return (
    <>
      <div
        className="innerbanner"
        style={{ backgroundImage: "url(/images2/seo-serbanner.webp)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcurmb-content">
                <h1 className="page-title">Virtual Assistant</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">
                      Virtual Assistant
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec" id="aads">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle text-white">Our Services</h4>
              <h2 className="title text-white">
                We Build Brands With <br />
                Our Best Services
              </h2>
            </div>
          </div>
          <div className="row mmt-30 text-left">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="VA-Real-Estate.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-garage-car"></i>
                    </div>
                    <div className="icon-boxtext">
                      Real Estate Administrative Assistant
                    </div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    In the competitive real estate market, effective
                    administrative support is crucial for staying
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="VA-Real-Estate.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="virtual-assistant.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-videoconference"></i>
                    </div>
                    <div className="icon-boxtext">Virtual Assistance</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    At Mediatrenz, we understand how day-to-day activities could
                    be overwhelming.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="virtual-assistant.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="lead_generation.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-lead-management"></i>
                    </div>
                    <div className="icon-boxtext">Lead Generation</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Effective lead generation is vital for business growth, and
                    Mediatrenz is here to help you expand your customer
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="lead_generation.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="email_assistance.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-clip-mail"></i>
                    </div>
                    <div className="icon-boxtext">Email Assistance</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Efficient email management is essential for maintaining
                    effective communication and staying
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="email_assistance.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="administration_services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-invite-alt"></i>
                    </div>
                    <div className="icon-boxtext">Administration Services</div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    Effective administrative support is the backbone of a
                    well-organized business, and Mediatrenz
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="administration_services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="hybrid-app-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-catalog-magazine"></i>
                    </div>
                    <div className="icon-boxtext">Bookkeeping</div>
                  </div>
                  <div className="icnbox-box-no">06</div>
                  <p>
                    Maintaining accurate financial records is vital for the
                    success of any business. At Mediatrenz,
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="hybrid-app-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="hybrid-app-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-photo-video"></i>
                    </div>
                    <div className="icon-boxtext">By Posts and Content</div>
                  </div>
                  <div className="icnbox-box-no">07</div>
                  <p>
                    Creating engaging and relevant content is essential for
                    connecting with your audience and enhancing your online
                    presence.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="hybrid-app-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HappyClients />
      <ContactSection />
    </>
  );
}
