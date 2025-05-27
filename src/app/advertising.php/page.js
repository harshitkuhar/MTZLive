import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";


export const metadata = {
  title: "Digital Advertising Services | Online Marketing Business",
  description: "The best place to advertise your business. We offer the most affordable, fast and efficient digital advertising services. Simple-to-use platform allows you to easily manage your campaigns and gives you the best ROI.",
  keywords: "Digital Advertising Services,Online MarketingBusiness",
  og_title: "Digital Advertising Services | Online Marketing Business",
  og_description: "The best place to advertise your business. We offer the most affordable, fast and efficient digital advertising services. Simple-to-use platform allows you to easily manage your campaigns and gives you the best ROI.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/advertising.php`, // Generate the canonical URL
  },
};

export default function Advertisingnmobile() {
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
                <h1 className="page-title">Advertising</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Advertising</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec" id="gas">
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
            {/* <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="google-ads-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-google"></i>
                    </div>
                    <div className="icon-boxtext">Google Ads SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    A Certified Google Partner trusted by Google, we are fully
                    qualified to take on your Google AdWords campaign
                    management.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="google-ads-services.php">
                    Read More
                    <span className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="facebook-ads-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-facebook"></i>
                    </div>
                    <div className="icon-boxtext">Facebook Ads SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Our social media experts use Facebook PPC advertising to
                    take your small business internet marketing to the next
                    level.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="facebook-ads-services.php">
                    Read More
                    <span className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="linkedin-ads-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-linkedin"></i>
                    </div>
                    <div className="icon-boxtext">Linkedin Ads SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    LinkedIn advertising involves targeting business users.
                    LinkedIn is a professional network and through its various
                    ad types...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="linkedin-ads-services.php">
                    Read More
                    <span className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="quora-ads-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi-tr-square-q"></i>
                    </div>
                    <div className="icon-boxtext">Quora Ads SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Quora is today the top-most question &amp; answer forum on
                    the Internet, which relies on community contributions...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="quora-ads-services.php">
                    Read More
                    <span className="flaticon-right-arrow" />
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
