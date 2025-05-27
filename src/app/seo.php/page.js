import ContactSection from "../components/ContactSection";
import Link from "next/link";
import HappyClients from "../components/HappyClients";

export const metadata = {
  title: "SEO Services India | Local SEO Company | SEO Agency India",
  description:
    "MEDIATRENZ is a professional SEO provider company in India that help business to attract organic traffic for a long time. Contact a pro SEO Agency India now.",
  keywords: "SEO Services India, Local SEO Company, SEO Agency India",
  og_title: "SEO Services India | Local SEO Company | SEO Agency India",
  og_description:
    "MEDIATRENZ is a professional SEO provider company in India that help business to attract organic traffic for a long time. Contact a pro SEO Agency India now.",
  og_image: "",
  og_url: "",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}/seo.php`, // Generate the canonical URL
  },
};

export default function Seomobile() {
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
                <h1 className="page-title">Professional SEO Services India</h1>
                <div className="breadcrumb_item ul-li">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="#">SEO</Link></li>*/}
                    <li className="breadcrumb-item active">SEO</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottomserviecs-sec">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 text-center title-mb">
              <h4 className="element-subtitle text-white">Our Services</h4>
              <h2 className="title text-white">
                We Build Brands With Our Best Services
              </h2>
            </div>
          </div>
          <div className="row mmt-30 text-left">
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-ux-browser"></i>
                    </div>
                    <div className="icon-boxtext">SEO Services</div>
                  </div>
                  <div className="icnbox-box-no">01</div>
                  <p>
                    Mediatrenz is an expert in this field and has been helping
                    many companies...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="local-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-network-cloud"></i>
                    </div>
                    <div className="icon-boxtext">Local SEO Services</div>
                  </div>
                  <div className="icnbox-box-no">02</div>
                  <p>
                    Let your brand leverage local search traffic to generate
                    quality leads...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/local-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="ecommerce-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-marketplace"></i>
                    </div>
                    <div className="icon-boxtext">E-Commerce SEO SERVICE</div>
                  </div>
                  <div className="icnbox-box-no">03</div>
                  <p>
                    Ecommerce SEO is one of the best ways to drive traffic to
                    your...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/ecommerce-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="small-business-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-seller"></i>
                    </div>
                    <div className="icon-boxtext">Small Business SEO</div>
                  </div>
                  <div className="icnbox-box-no">04</div>
                  <p>
                    For any small or local business looking to stay afloat,
                    search engine visibility...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/small-business-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="link-building-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-arrow-up-right-from-square"></i>
                    </div>
                    <div className="icon-boxtext">Link Building Service</div>
                  </div>
                  <div className="icnbox-box-no">05</div>
                  <p>
                    Google’s search rankings depend highly upon the links and
                    the content...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/link-building-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="apps-store-optimization-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-category"></i>
                    </div>
                    <div className="icon-boxtext">App Stores Optimisation</div>
                  </div>
                  <div className="icnbox-box-no">06</div>
                  <p>
                    App Store Optimization (ASO) is the process of improving
                    app...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/apps-store-optimization-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="hire-dedicated-seo-manager.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-assign"></i>
                    </div>
                    <div className="icon-boxtext">
                      Hire Dedicated SEO Manager
                    </div>
                  </div>
                  <div className="icnbox-box-no">07</div>
                  <p>
                    We offers dedicated, expert SEO professionals to tweak
                    your...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/hire-dedicated-seo-manager.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="google-penalty-recovery.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-crutches"></i>
                    </div>
                    <div className="icon-boxtext">Google Penalty Recovery</div>
                  </div>
                  <div className="icnbox-box-no">08</div>
                  <p>
                    If your site has been issued with a manual or algorithmic
                    penalty...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/google-penalty-recovery.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="content-marketing-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-web-design"></i>
                    </div>
                    <div className="icon-boxtext">
                      Content Marketing Service
                    </div>
                  </div>
                  <div className="icnbox-box-no">09</div>
                  <p>
                    Content is king, as the adage goes, and it’s just as true
                    today as it was two...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/content-marketing-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="affordable-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-dashboard"></i>
                    </div>
                    <div className="icon-boxtext">Affordable SEO Service</div>
                  </div>
                  <div className="icnbox-box-no">10</div>
                  <p>
                    We have the top-level performance SEO plans, which are not
                    just affordable...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/affordable-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="organic-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-back-up"></i>
                    </div>
                    <div className="icon-boxtext">Organic SEO Service</div>
                  </div>
                  <div className="icnbox-box-no">11</div>
                  <p>
                    Most of you might be wondering how organic SEO helps in
                    the...
                  </p>
                </Link>
                <div className="btn-link1">
                  <Link href="/organic-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="professional-seo-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-cloud-share"></i>
                    </div>
                    <div className="icon-boxtext">Professional SEO Service</div>
                  </div>
                  <div className="icnbox-box-no">12</div>
                  <p>We always believe in the power of human-first SEO...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/professional-seo-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="seo-optimization-services.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-site-alt"></i>
                    </div>
                    <div className="icon-boxtext">SEO Optimization Service</div>
                  </div>
                  <div className="icnbox-box-no">13</div>
                  <p>Content is king, as the adage goes, and it’s just...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-optimization-services.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="seo-consulting-firm.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-ts-farm"></i>
                    </div>
                    <div className="icon-boxtext">SEO Consulting Firm</div>
                  </div>
                  <div className="icnbox-box-no">14</div>
                  <p>If you want to stand out in the crowd, your...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-consulting-firm.php">
                    Read More
                    <i className="fi fi-br-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-6 col-414full mt-30">
              <div className="intro-ser-col">
                <Link href="seo-marketing-firm.php">
                  <div className="headtl">
                    <div className="icon-box">
                      <i className="fi fi-tr-practice"></i>
                    </div>
                    <div className="icon-boxtext">SEO Marketing Firm</div>
                  </div>
                  <div className="icnbox-box-no">15</div>
                  <p>Without any of the ethical practices, all...</p>
                </Link>
                <div className="btn-link1">
                  <Link href="/seo-marketing-firm.php">
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
