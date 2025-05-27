import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "Reputation Management Agency | Professional PR Company",
  description:
    "MEDIATRENZ is a top-notch reputation management agency that builds a strong relationship and brand awareness among your audience. To get the best offer, call us.",
  keywords: "Reputation Management Agency, Professional PR Company",
  og_title: "Reputation Management Agency | Professional PR Company",
  og_description:
    "MEDIATRENZ is a top-notch reputation management agency that builds a strong relationship and brand awareness among your audience. To get the best offer, call us.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/reputation.php`, // Generate the canonical URL
  },
};

export default function Reputationmobile() {
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
                <h1 className="page-title">Reputation Management SEO</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Reputation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec" id="rcs">
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
                <Link href="remove-complaints-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-remove-folder"></i>
                    </div>
                    <div className="icon-boxtext">Remove Complaints</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Online complaints can truly hurt a business. Sometimes...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="remove-complaints-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="bad-reviews-removal-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-nfc-trash"></i>
                    </div>
                    <div className="icon-boxtext">Remove Bad Reviews</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Being the leader in the industry, the Mediatrenz team...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="bad-reviews-removal-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="orm-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-challenge-alt"></i>
                    </div>
                    <div className="icon-boxtext">
                      Online reputation Management
                    </div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    {`One’s`} reputation is probably the most important things...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="orm-services.php">
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
