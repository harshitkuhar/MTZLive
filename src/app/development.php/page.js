import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Website Development Company India | Hire Web Developer India",
  description:
    "MEDIATRENZ is a trusted & reliable website development company in India. We provide customer-centric and result-oriented website development services across the world.",
  keywords: "Website Development Company India, Hire Web Developer India",
  og_title: "Website Development Company India | Hire Web Developer India",
  og_description:
    "MEDIATRENZ is a trusted & reliable website development company in India. We provide customer-centric and result-oriented website development services across the world.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/development.php`, // Generate the canonical URL
  },
};

export default function Developmentmobile() {
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
                <h1 className="page-title">Development</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec" id="wds">
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
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="web-development-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-ux-browser"></i>
                    </div>
                    <div className="icon-boxtext">Web Development SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Welcome to Mediatrenz, the most preferred choice for quality
                    web...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="web-development-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="website-designing-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-network-cloud"></i>
                    </div>
                    <div className="icon-boxtext">
                      Website Designing SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Mediatrenz offers you a professional website that enables
                    you to do...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="website-designing-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="wordpress-development-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-marketplace"></i>
                    </div>
                    <div className="icon-boxtext">
                      Wordpress Development SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Cost-Effective WordPress Development Solutions For Your
                    Business...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="wordpress-development-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="moodle-development-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-seller"></i>
                    </div>
                    <div className="icon-boxtext">Moodle Development</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Moodle is a learning platform designed to provide
                    educators...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="moodle-development-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="drupal-development-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-arrow-up-right-from-square"></i>
                    </div>
                    <div className="icon-boxtext">
                      Drupal Development Services
                    </div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    We Develop Secure, Scalable, User-friendly Drupal
                    Websites...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="drupal-development-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="core-php-development.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-category"></i>
                    </div>
                    <div className="icon-boxtext">
                      Core PHP Development SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">06</div>
                  <p>
                    We at Mediatrenz specialize in website development
                    services...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="core-php-development.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="e-commerce-development.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-assign"></i>
                    </div>
                    <div className="icon-boxtext">E-Commerce Development</div>
                  </div>
                  <div className="icnbox-box-no">07</div>
                  <p>
                    We deliver the best eCommerce web solutions to our clients.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="e-commerce-development.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="laravel-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-crutches"></i>
                    </div>
                    <div className="icon-boxtext">Laravel Development</div>
                  </div>
                  <div className="icnbox-box-no">08</div>
                  <p>
                    Mediatrenz offers a wide-range of flawless custom Laravel
                    solutions...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="laravel-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="website-redesigning-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-web-design"></i>
                    </div>
                    <div className="icon-boxtext">
                      Website Redesigning Service
                    </div>
                  </div>
                  <div className="icnbox-box-no">09</div>
                  <p>
                    Every business has its own identity, which we believe
                    should...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="website-redesigning-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="erp-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-dashboard"></i>
                    </div>
                    <div className="icon-boxtext">ERP Development Service</div>
                  </div>
                  <div className="icnbox-box-no">10</div>
                  <p>
                    Fulfill all your productivity and efficiency requirements
                    with...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="erp-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="web-application-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-back-up"></i>
                    </div>
                    <div className="icon-boxtext">
                      Web Application Development
                    </div>
                  </div>
                  <div className="icnbox-box-no">11</div>
                  <p>
                    Our expertise in web application development services
                    covers...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="web-application-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="logo-designing-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-cloud-share"></i>
                    </div>
                    <div className="icon-boxtext">Logo Designing Service</div>
                  </div>
                  <div className="icnbox-box-no">12</div>
                  <p>
                    It is a well-known fact that you need to use your company
                    logo...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="logo-designing-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-left">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="psd-to-html-conversion-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-site-alt"></i>
                    </div>
                    <div className="icon-boxtext">
                      PSD To HTML Conversion SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">13</div>
                  <p>
                    We create elegantly designed, custom-made websites from PSD.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="psd-to-html-conversion-service.php">
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
