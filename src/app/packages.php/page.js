import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "SEO, SMO, ORM,GMB Packages  and Adwords Packages",
  description:
    "We have affordable SEO , SMO, ORM and adwords packagesthat will help you to step upyour business online to become a successful leader in the market.",
  keywords: "SEO, SMO, ORM,GMB Packages  and Adwords Packages",
  og_title: "SEO, SMO, ORM,GMB Packages  and Adwords Packages",
  og_description:
    "We have affordable SEO , SMO, ORM and adwords packagesthat will help you to step upyour business online to become a successful leader in the market.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/packages.php`, // Generate the canonical URL
  },
};

export default function Packagesmobile() {
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
                <h1 className="page-title">Our Packages</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">Packages</li>
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
              <h4 className="element-subtitle text-white">Our Packages</h4>
              <h2 className="title text-white">
                We Build Brands With <br />
                Our Best Packages
              </h2>
            </div>
          </div>
          <div className="row mmt-30 text-left">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/seo-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-comment-alt-dots"></i>
                    </div>
                    <div className="icon-boxtext">SEO PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Boost your search engine rankings with our affordable SEO
                    packages.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-packages.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/smo-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-comments-question"></i>
                    </div>
                    <div className="icon-boxtext">SMO PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Boost your social media pages with our affordable SMO
                    packages.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/smo-packages.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/local-seo-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-stats"></i>
                    </div>
                    <div className="icon-boxtext">GMB PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Boost your Local SEO rankings with our affordable GMB
                    Packages.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/local-seo-packages.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/orm-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-curve-arrow"></i>
                    </div>
                    <div className="icon-boxtext">ORM PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    Boost your online reputation with our affordable ORM
                    packages.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/orm-packages.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/ppc-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-chart-pie-simple-circle-dollar"></i>
                    </div>
                    <div className="icon-boxtext">PPC PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    Boost your Pay Per Click campaign with our affordable PPC
                    packages.
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/ppc-packages.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="/aso-packages.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-holding-hand-revenue"></i>
                    </div>
                    <div className="icon-boxtext">ASO PACKAGES</div>
                  </div>
                  <div className="icnbox-box-no">06</div>
                  <p>
                    Boost your App Store rankings and installs with our
                    affordable ASO...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/aso-packages.php">
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
