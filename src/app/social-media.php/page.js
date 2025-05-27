import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Social Media Services | Social Media Marketing Services",
  description:
    "Social media marketing is the biggest social platformto increase brand awareness of your products and services. Take advantage of it by hiring us to connect customer and earn your target audience.",
  keywords: "Social Media Services,Social Media Marketing Services",
  og_title: "Social Media Services | Social Media Marketing Services",
  og_description:
    "Social media marketing is the biggest social platformto increase brand awareness of your products and services. Take advantage of it by hiring us to connect customer and earn your target audience.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/social-media.php`, // Generate the canonical URL
  },
};

export default function Socialmediamobile() {
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
                <h1 className="page-title">Social Media Agency</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Social Media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec" id="fams">
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
                <Link href="facebook-marketing-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-facebook"></i>
                    </div>
                    <div className="icon-boxtext">
                      FACEBOOK MARKETING SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Facebook is the largest social media network in the world...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="facebook-marketing-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="instagram-marketing-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-instagram"></i>
                    </div>
                    <div className="icon-boxtext">
                      INSTAGRAM MARKETING SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    As the second-largest social media platform, Instagram’s...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="instagram-marketing-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="pinterest-marketing-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-pinterest"></i>
                    </div>
                    <div className="icon-boxtext">
                      PINTEREST MARKETING SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Pinterest marketing services can be a boon for your brand...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="pinterest-marketing-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-left justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="linkedin-marketing-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-linkedin"></i>
                    </div>
                    <div className="icon-boxtext">
                      LINKEDIN MARKETING SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Most companies have realized that, when done right, social
                    media...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="linkedin-marketing-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="twitter-marketing-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-twitter-alt"></i>
                    </div>
                    <div className="icon-boxtext">
                      TWITTER MARKETING SERVICE
                    </div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    You definitely might have come across Twitter- the
                    worldwide...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="twitter-marketing-service.php">
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
