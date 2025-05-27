import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Mobile App Development Company India | Android App | iOS App",
  description:
    "MEDIATRENZ is a professional mobile app development company in India that builds bespoke Android, iOS applications, Native and Hybrid apps.",
  keywords: "Android App Development Service,IOS App Development Service",
  og_title: "Mobile App Development Company India | Android App | iOS App",
  og_description:
    "MEDIATRENZ is a professional mobile app development company in India that builds bespoke Android, iOS applications, Native and Hybrid apps.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/mobile-apps.php`, // Generate the canonical URL
  },
};

export default function Mobileappmobile() {
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
                <h1 className="page-title">Mobile App Development</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Mobile Apps</li>
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
                <Link href="android-app-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-rr-braille-n-alt"></i>
                    </div>
                    <div className="icon-boxtext">Android Apps Development</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    If there is one name that has become synonymous with mobile
                    apps and smartphones then it must be that of Android.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="android-app-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="ios-app-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-brands-apple"></i>
                    </div>
                    <div className="icon-boxtext">IOS Apps Development</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Helping Startups and Businesses around the globe develop
                    next-gen iOS apps with cutting-edge technology.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="ios-app-development-service.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="native-app-development-service.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-category"></i>
                    </div>
                    <div className="icon-boxtext">Native Apps Development</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Build The Base For A Successful Future For Your Business
                    Through Native Apps Development Services!
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="native-app-development-service.php">
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
                      <i className="fi fi-rr-apps"></i>
                    </div>
                    <div className="icon-boxtext">Hybrid Apps Development</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Grow your business with custom mobile apps - get in touch
                    with Mediatrenz for cross-platform mobile app development.
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
